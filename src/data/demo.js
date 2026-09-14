// Verbatim model prompts and outputs for the mirror slides (see docs/demo/).
// Quoted model output, not Tim's writing -- exempt from scripts/lint-copy.js
// (em dashes and other brand-lint rules do not apply to quoted third-party text).

// One line above a pasted PSA ticket. The ticket is invented; the shape is not.
export const weakPrompt = `Write an email to the client about this. Apologize and let them know we're on top of it.

Ticket #48213 - Harbor Dental - Dentrix down all sites
Status: Resolved
Priority: P1
Opened: 09/12 08:47 by Dana W (client)
Contact: Dana Whitfield, Office Mgr
Board: Service Desk
Type: Network / Outage

08:47 - Dana called, front desk at Midtown and Riverside can't open Dentrix, main office is fine. Users getting "cannot connect to database server." She's pretty upset, says they have a full waiting room. Told her we're looking.
08:52 - Tunnels from Midtown and Riverside to HQ FGT-60F are down. Phase 1 failing. Cert on the FGT expired 09/11 23:59. This is the same cert we flagged in the Q2 review that nobody approved the renewal on.
09:10 - Regenerated CSR, submitted to DigiCert. Waiting on issuance.
09:48 - Cert issued. Installed on FGT-60F, rebound to IPsec Phase 1.
10:12 - Tunnels up. Riverside confirmed Dentrix working. Midtown confirmed 10:15.
10:15 - Called Dana back, told her it's up. She asked if any patient records were lost, told her no, the server was never down, they just couldn't reach it.
10:25 - Verified all three sites. Closing.

Resolution: Expired SSL cert on HQ Fortigate caused IPsec P1 failure for branch tunnels. Renewed cert via DigiCert, rebound, tunnels restored.
Time: 1.5h
Root cause: cert expiry, no monitoring/alerting on cert dates. Recommend adding to RMM.`

export const weakOutput = `Subject: Resolved – Dentrix Outage at Midtown & Riverside (Ticket #48213)

Hi Dana,

I want to sincerely apologize for the disruption this morning at your Midtown and Riverside offices. I know a full waiting room with no access to Dentrix is incredibly stressful for your team and your patients, and I'm sorry we didn't catch this before it caused an issue.

**What happened:** A security certificate on your main office firewall expired overnight, which broke the secure network connection between HQ and the two branch offices. This prevented Midtown and Riverside from reaching the Dentrix server — the server itself and your patient data were never at risk or offline at any point.

**What we did:** Our team identified the cause within minutes of your call, issued and installed a renewed certificate, and restored connectivity. Riverside was back online at 10:12 AM and Midtown at 10:15 AM. We confirmed all three sites were fully operational before closing the ticket.

**Total impact:** Approximately 1.5 hours of intermittent access issues at the two branch locations. No data was lost or compromised.

**What we're doing to prevent this going forward:** This certificate had actually been flagged for renewal in our Q2 review, and we're correcting the gap that let it lapse. We're adding automated certificate expiration monitoring to our systems so we get advance alerts well before any certificate nears expiration — this will ensure we catch and renew these proactively going forward, rather than reactively.

Thank you for your patience this morning, and please don't hesitate to reach out if you have any questions or if anything seems off at any of the sites.

Best regards,
Tim
[Your Company Name] – Service Desk`

// Same ticket pasted below the same way; only the words above it changed.
export const strongPrompt = `I need to send Dana Whitfield an email about this morning's outage. She's the office manager at Harbor Dental, three locations, and she's the one the front desk complains to. She isn't technical and doesn't want to be. She'll forward whatever I send straight to Dr. Patel, who owns the practice, so it has to stand on its own with no editing.

The ticket notes are below, but don't quote them. She doesn't need the equipment names or the timeline, and she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved. That's a conversation for me and Dr. Patel, not this email. What she needs to know is that all three offices were down together for about 90 minutes, why in one plain sentence, that everyone was back by 10:25, and that no patient data was touched, because that's what she asked me on the phone and what she's afraid of.

The part I actually care about is what comes next. We're adding monitoring that warns us thirty days before any certificate expires, and it'll be in place by Friday. That's what "on top of it" actually means, so say that. Do not use the phrase "on top of it" anywhere in the email.

Keep it under 150 words, plain language. Own it without groveling. Sign it from me, Tim at Northline IT.

Ticket #48213 - Harbor Dental - Dentrix down all sites
Status: Resolved
Priority: P1
Opened: 09/12 08:47 by Dana W (client)
Contact: Dana Whitfield, Office Mgr
Board: Service Desk
Type: Network / Outage

08:47 - Dana called, front desk at Midtown and Riverside can't open Dentrix, main office is fine. Users getting "cannot connect to database server." She's pretty upset, says they have a full waiting room. Told her we're looking.
08:52 - Tunnels from Midtown and Riverside to HQ FGT-60F are down. Phase 1 failing. Cert on the FGT expired 09/11 23:59. This is the same cert we flagged in the Q2 review that nobody approved the renewal on.
09:10 - Regenerated CSR, submitted to DigiCert. Waiting on issuance.
09:48 - Cert issued. Installed on FGT-60F, rebound to IPsec Phase 1.
10:12 - Tunnels up. Riverside confirmed Dentrix working. Midtown confirmed 10:15.
10:15 - Called Dana back, told her it's up. She asked if any patient records were lost, told her no, the server was never down, they just couldn't reach it.
10:25 - Verified all three sites. Closing.

Resolution: Expired SSL cert on HQ Fortigate caused IPsec P1 failure for branch tunnels. Renewed cert via DigiCert, rebound, tunnels restored.
Time: 1.5h
Root cause: cert expiry, no monitoring/alerting on cert dates. Recommend adding to RMM.`

// The brief alone, without the pasted ticket, for the slide.
export const strongBrief = `I need to send Dana Whitfield an email about this morning's outage. She's the office manager at Harbor Dental, three locations, and she's the one the front desk complains to. She isn't technical and doesn't want to be. She'll forward whatever I send straight to Dr. Patel, who owns the practice, so it has to stand on its own with no editing.

The ticket notes are below, but don't quote them. She doesn't need the equipment names or the timeline, and she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved. That's a conversation for me and Dr. Patel, not this email. What she needs to know is that all three offices were down together for about 90 minutes, why in one plain sentence, that everyone was back by 10:25, and that no patient data was touched, because that's what she asked me on the phone and what she's afraid of.

The part I actually care about is what comes next. We're adding monitoring that warns us thirty days before any certificate expires, and it'll be in place by Friday. That's what "on top of it" actually means, so say that. Do not use the phrase "on top of it" anywhere in the email.

Keep it under 150 words, plain language. Own it without groveling. Sign it from me, Tim at Northline IT.`

export const strongOutput = `Subject: This Morning's Outage — Resolved

Dana,

This morning's Dentrix outage at all three offices was caused by a network security certificate on our end that expired overnight. It's a straightforward fix once identified, but it did knock all three locations offline together, starting around 8:47 AM. Riverside and Midtown were back up by 10:15, and we had all three sites fully verified by 10:25 — about 90 minutes total.

No patient data was affected. The server itself was never down or at risk; the offices simply couldn't reach it while the connection was out.

We're putting in place monitoring that will alert us 30 days before any certificate is set to expire, so this specific failure mode can't catch us again. That'll be live by Friday.

Sorry for the disruption to your morning — I know a full waiting room makes this worse. Let me know if you have any questions.

Tim
Northline IT`

export const askPrompt = `That's not the email I needed, and I don't want you to just take another swing at it. Look at how I asked you. What should I have told you up front so you could have written the one I had in my head? Teach me to ask better, not just to get a better email this once.`

export const askOutput = `Fair. Here's what was missing, concretely:

**1. Who's actually reading it, and what's their relationship to the incident.**
I didn't know if this goes to Dana alone, or if it also lands in front of the practice owner/doctor. Dana was upset and dealing with a packed waiting room — that's a different email than one written for someone reviewing vendor performance. "Client" is a role, not a person; I need the person.

**2. What "on top of it" was supposed to mean, specifically.**
That phrase can mean three different things:
- We fixed it fast (speed)
- We know why it happened (competence)
- We're making sure it doesn't happen again (accountability)

I guessed all three and gave equal weight to each. You probably had one that mattered most — tell me which.

**3. Whether the Q2-review detail was a feature or a liability.**
"This is the same cert we flagged in Q2 that nobody approved" is the single riskiest line in that ticket. It's either something you want to own transparently ("we caught this and should have pushed harder") or something you don't want anywhere near a client's inbox because it reads as "we knew and didn't fix it." I put it in. That's a 50/50 guess I shouldn't have made silently — this is the kind of thing to flag rather than decide for you.

**4. Tone register.**
"Apologize" ranges from a two-line "sorry, it's fixed, here's why" to a full incident letter with a remediation plan. Length and formality are load-bearing here, not decoration.

**5. Whether there's a business ask riding along.**
Service credit? Renewed SLA conversation? Nothing at all, just goodwill? If there's a commercial angle, the email is doing double duty and I need to know that going in.

**The reusable version of this:** when you hand me a raw ticket and say "write the email," give me the shape, not just the topic — *who reads it, what one thing they should feel/conclude, and any line that's off-limits or must-include.* One sentence of that (e.g., "short note to Dana only, focus on speed-of-fix, leave out that we missed the Q2 renewal, no ask") would've gotten you the email you had in your head on the first pass.

Want to give me those four things now and I'll take a real swing?`

// Same answer, excerpted: its opening line and the five bold labels.
// Explanations omitted. Full text above.
export const askOutputHeadings = `Fair. Here's what was missing, concretely:

1. **Who's actually reading it, and what's their relationship to the incident**
2. **What "on top of it" was supposed to mean, specifically**
3. **Whether the Q2-review detail was a feature or a liability**
4. **Tone register**
5. **Whether there's a business ask riding along**`

// Two sentences from item 3 of the same answer, unedited.
export const askOutputConfession = `I put it in. That's a 50/50 guess I shouldn't have made silently.`

// Slides show a stand-in name; the recorded outputs above keep the real one.
export const SPEAKER_STAND_IN = 'Alex'
export function withoutTim(text) {
  return text.replace(/\bTim\b/g, SPEAKER_STAND_IN)
}
