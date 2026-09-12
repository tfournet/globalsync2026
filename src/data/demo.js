// Verbatim model prompts and outputs for slides 3 to 5 (see docs/demo/).
// Quoted model output, not Tim's writing -- exempt from scripts/lint-copy.js
// (em dashes and other brand-lint rules do not apply to quoted third-party text).

export const weakPrompt = `Write an email to a client about the outage today`

export const weakOutput = `I don't have any details about a specific outage (what was affected, timing, duration, root cause, or which client this is for). I can draft a solid template now and you can fill in the specifics, or you can give me the details and I'll tailor it.

Here's a ready-to-use draft:

---

**Subject: Service Outage on September 12, 2026 – Summary and Next Steps**

Hi [Client Name],

I'm writing to let you know about a service outage that occurred earlier today, [start time]–[end time] [timezone].

**What happened:**
[Brief description of the issue, e.g., "Our [system/service] experienced an interruption due to [cause]."]

**Impact:**
[What the client would have noticed, e.g., "You may have experienced [errors/downtime/degraded performance] during this window."]

**Resolution:**
The issue was identified and resolved at [time]. We've confirmed that [system/service] is now operating normally.

**Next steps:**
We're conducting a full review to understand the root cause and to put safeguards in place to prevent a recurrence. [If applicable: We'll follow up with a detailed post-incident report by [date].]

We know outages like this can disrupt your work, and we apologize for the inconvenience. Please don't hesitate to reach out if you noticed any lingering issues or have questions.

Thank you for your patience.

Best regards,
Tim
[Title/Company]
tim@rewst.io

---

Let me know the actual details (system name, timing, cause, impact, resolution) and I'll fill this in precisely.`

export const strongPrompt = `Write an email to a client about the outage today.

Who it is for: Dana Whitfield, office manager at Harbor Dental Group, a 3-location dental practice. She is not technical and she is the one who gets the complaints from the front desk.

What happened: their practice management software (Dentrix) was unreachable from all three offices from 8:40am to 10:15am Eastern. Cause was an expired certificate on the VPN appliance at the main office; the branch offices route through it.

What is fixed: the certificate was replaced at 10:15am and all three offices confirmed back online by 10:25am. No data was lost.

What is still pending: we are adding certificate expiry monitoring with a 30 day warning so this cannot recur silently. That will be in place by Friday.

Tone: plain, direct, no jargon, take responsibility without groveling. She should be able to forward it to the practice owner without editing it.

Length: under 150 words. Sign it from Tim at Northline IT.`

export const strongOutput = `Subject: Today's Dentrix Outage — What Happened and What We Fixed

Hi Dana,

This morning, Dentrix was down at all three offices from 8:40 to 10:15am. The cause was a security certificate on our VPN equipment that expired — the branch offices connect through the main office, so all three went down together.

We replaced the certificate and confirmed all three locations back online by 10:25am. No patient data was lost or affected.

To make sure this doesn't happen again without warning, we're adding a monitoring alert that flags certificates 30 days before they expire. That will be in place by Friday.

We're sorry for the disruption to your patients and front desk today. Feel free to forward this along to Dr. [Owner] if helpful.

Let me know if you have any questions.

Tim
Northline IT`

export const askPrompt = `That first draft wasn't what I needed. Looking back at how I asked, how could I have asked so you'd produce something closer to what I actually needed?`

export const askOutput = `A few things were missing that made me default to a generic template instead of a real email:

1. **Which client and which system/service** — I didn't know the audience or what actually broke, so I couldn't name anything concrete.
2. **What actually happened** — cause, start/end time, what was affected. Without that I had to write placeholders like "[cause]" instead of real content.
3. **Impact on the client specifically** — did they see errors, downtime, data delay? That's usually the part they care about most.
4. **Current status** — resolved, monitoring, or still degraded? Changes the tone entirely.
5. **Relationship/tone context** — is this a first notice, a follow-up after they complained, or does it need to reference an SLA/credit? That changes how apologetic vs. matter-of-fact it should be.
6. **Source material** — if there's an incident ticket, Slack thread, status page post, or postmortem doc, pointing me at it (or pasting it in) would let me pull real facts instead of guessing.

Fastest fix next time: paste in whatever you already have (ticket notes, Slack thread, status page update) and just say "turn this into a client email for [client]." I'll extract the specifics rather than templating around gaps.

If you want, give me those details now and I'll write the real version.`

