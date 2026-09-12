#!/usr/bin/env python3
"""Generate one image with OpenAI gpt-image and save it. Usage:
   gen_image.py --out path.png --prompt "..." [--size 1536x1024] [--model gpt-image-2]
Reads OPENAI_API_KEY from env or from ~/.hermes/profiles/clean/.env."""
import argparse, base64, json, os, sys, urllib.request, pathlib

def load_key():
    k = os.environ.get("OPENAI_API_KEY")
    if k: return k
    for p in ["/home/tim/.hermes/profiles/clean/.env", "/home/tim/.hermes/.env"]:
        try:
            for line in open(p):
                if line.startswith("OPENAI_API_KEY="):
                    return line.split("=",1)[1].strip().strip('"')
        except FileNotFoundError: pass
    sys.exit("no OPENAI_API_KEY")

ap = argparse.ArgumentParser()
ap.add_argument("--out", required=True); ap.add_argument("--prompt", required=True)
ap.add_argument("--size", default="1536x1024"); ap.add_argument("--model", default="gpt-image-2")
ap.add_argument("--quality", default="high")
a = ap.parse_args()
body = json.dumps({"model": a.model, "prompt": a.prompt, "size": a.size, "quality": a.quality, "n": 1}).encode()
req = urllib.request.Request("https://api.openai.com/v1/images/generations", data=body,
    headers={"Authorization": f"Bearer {load_key()}", "Content-Type": "application/json"})
try:
    with urllib.request.urlopen(req, timeout=300) as r: d = json.load(r)
except urllib.error.HTTPError as e:
    sys.exit(f"HTTP {e.code}: {e.read().decode()[:500]}")
img = d["data"][0]
out = pathlib.Path(a.out); out.parent.mkdir(parents=True, exist_ok=True)
if img.get("b64_json"): out.write_bytes(base64.b64decode(img["b64_json"]))
else: urllib.request.urlretrieve(img["url"], out)
print(json.dumps({"out": str(out), "model": a.model, "revised_prompt": img.get("revised_prompt")}))
