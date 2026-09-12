A few things were missing that made me default to a generic template instead of a real email:

1. **Which client and which system/service** — I didn't know the audience or what actually broke, so I couldn't name anything concrete.
2. **What actually happened** — cause, start/end time, what was affected. Without that I had to write placeholders like "[cause]" instead of real content.
3. **Impact on the client specifically** — did they see errors, downtime, data delay? That's usually the part they care about most.
4. **Current status** — resolved, monitoring, or still degraded? Changes the tone entirely.
5. **Relationship/tone context** — is this a first notice, a follow-up after they complained, or does it need to reference an SLA/credit? That changes how apologetic vs. matter-of-fact it should be.
6. **Source material** — if there's an incident ticket, Slack thread, status page post, or postmortem doc, pointing me at it (or pasting it in) would let me pull real facts instead of guessing.

Fastest fix next time: paste in whatever you already have (ticket notes, Slack thread, status page update) and just say "turn this into a client email for [client]." I'll extract the specifics rather than templating around gaps.

If you want, give me those details now and I'll write the real version.