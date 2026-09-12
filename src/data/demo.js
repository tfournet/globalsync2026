// Verbatim model prompts and outputs for the mirror slides (see docs/demo/).
// Quoted model output, not Tim's writing -- exempt from scripts/lint-copy.js
// (em dashes and other brand-lint rules do not apply to quoted third-party text).

export const weakPrompt = `Write an email to Dana at Harbor Dental about this morning's Dentrix outage. It was down about 90 minutes because of an expired cert on the VPN. It's fixed now. Apologize and let her know we're on top of it.`

export const weakOutput = `Subject: Follow-up on This Morning's Dentrix Outage

Hi Dana,

I wanted to follow up on the Dentrix outage this morning and apologize for the disruption it caused at Harbor Dental. We know how much you rely on that system to keep the front desk and scheduling running smoothly, and I'm sorry for the trouble it caused.

The issue was caused by an expired certificate on the VPN connection, which affected access to Dentrix for about 90 minutes. It's fully resolved now, and Dentrix should be back to normal.

We're keeping an eye on things to make sure it stays stable, and we're on top of it. If you notice anything unusual or run into any further issues, please reach out right away and we'll jump on it.

Thanks for your patience, and sorry again for the inconvenience.

Best,
Tim`

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

export const askPrompt = `That email wasn't what I needed. Looking back at what I gave you, what was missing from my request that you would have needed to write the one I had in my head?`

export const askOutput = `Looking back, here's what I had to guess at rather than know:

1. **Who I'm signing as / what company** — I used "Tim" with no company name or title. If this is from an MSP or IT provider to a client, Dana needs to know who's writing and what firm, not just a first name.

2. **Relationship/tone** — I don't know if you and Dana are on a first-name, casual basis or if this needs to be more formal client-facing correspondence. That changes word choice a lot.

3. **Level of technical detail Dana wants** — I named "VPN" and "certificate" explicitly. You may not want to expose the technical cause to a client at all, or want it phrased in plainer terms ("a routine security credential expired").

4. **What "on top of it" should actually claim** — I wrote a vague "we're monitoring it." If there's a concrete fix (e.g., "we've set up alerts so this can't happen without warning again" or "we've extended the cert validity/added auto-renewal"), that's a much stronger and more honest thing to say than generic reassurance.

5. **Whether this is a first occurrence or a repeat** — that changes whether the tone should be light regret or a more serious accountability statement.

6. **Length/format expectations** — you didn't say short-and-direct vs. a fuller explanation, so I defaulted to a longer, more formal shape that may not match what you'd actually send.

7. **Any SLA/credit/compensation angle** — some outage notices need to mention a credit or reference a support ticket number; I don't know if that applies here.

If you tell me your role/company, your relationship with Dana, and whether there's a concrete preventive fix in place, I can rewrite it to match what you actually had in mind.`

// Same answer, headings only: each numbered label is the model's own bold
// text, the explanations after the dash are omitted. Full text above.
export const askOutputHeadings = `Looking back, here's what I had to guess at rather than know:

1. **Who I'm signing as / what company**
2. **Relationship/tone**
3. **Level of technical detail Dana wants**
4. **What "on top of it" should actually claim**
5. **Whether this is a first occurrence or a repeat**
6. **Length/format expectations**
7. **Any SLA/credit/compensation angle**`
