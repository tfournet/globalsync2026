#!/usr/bin/env bash
# Replay the demo prompts N times each, fresh sessions, same conditions as the
# originals (Sonnet, no tools, "You are a helpful assistant."). Records every
# output so the slides can be checked against what the model typically does.
set -euo pipefail
export HOME=/home/tim
cd "$(dirname "$0")"
N="${1:-3}"
SYS="You are a helpful assistant."
mkdir -p replays
run() { # name, promptfile, [resume-id-file]
  local name="$1" pf="$2" resume="${3:-}"
  for i in $(seq 1 "$N"); do
    local out="replays/${name}-${i}.json"
    if [ -n "$resume" ]; then
      claude -p "$(cat "$pf")" --model sonnet --tools "" --system-prompt "$SYS" --resume "$(cat "replays/weak-${i}.sid")" --output-format json --max-turns 1 > "$out" 2>/dev/null || true
    else
      claude -p "$(cat "$pf")" --model sonnet --tools "" --system-prompt "$SYS" --output-format json --max-turns 1 > "$out" 2>/dev/null || true
    fi
    python3 - "$out" "$name" "$i" <<'EOF'
import json,sys
t=open(sys.argv[1]).read(); d=json.loads(t[t.index('{'):])
open(f"replays/{sys.argv[2]}-{sys.argv[3]}.md","w").write(d["result"])
if sys.argv[2]=="weak": open(f"replays/weak-{sys.argv[3]}.sid","w").write(d["session_id"])
print(f"{sys.argv[2]} {sys.argv[3]}: {len(d['result'].split())} words")
EOF
  done
}
run weak 1-weak-prompt.md
run ask 3-ask-prompt.md resume
run strong 2-strong-prompt.md
