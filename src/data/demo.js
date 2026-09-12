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

export const weakOutput = `Subject: Resolved – Dentrix Access Outage at Midtown & Riverside (Ticket #48213)

Dana,

I want to sincerely apologize for the disruption this morning at Midtown and Riverside — I know a full waiting room with no access to Dentrix is the last thing you need, and we're sorry for the stress it caused your team.

Here's a quick summary of what happened and what we did:

**What happened:** The secure network connection (VPN tunnel) between your branch offices and the main office server expired due to an SSL certificate that lapsed overnight. This caused Midtown and Riverside to lose their connection to the Dentrix database, even though the server itself was never down and no patient data was affected or at risk.

**What we did:** Our team caught the tunnel failures shortly after you called, identified the expired certificate as the root cause, and immediately requested a new one. Once issued, we installed it and restored the connections. All three sites were confirmed back up and working normally by 10:25 AM — total downtime was under two hours.

**Going forward:** We've identified that this certificate wasn't being actively monitored for expiration, and we're on top of it — we're adding automated alerting for certificate expiration dates to our monitoring system so this type of issue is caught and resolved before it can impact your sites again.

Thank you for your patience while we worked through this, and please don't hesitate to reach out if you have any questions or if anything still seems off at either location.

Best regards,
[Your Name]
[Company Name] Service Desk`

// Same ticket pasted below the same way; only the words above it changed.
export const strongPrompt = `I need to send Dana Whitfield an email about this morning's outage. She's the office manager at Harbor Dental, three locations, and she's the one the front desk complains to. She isn't technical and doesn't want to be. She'll forward whatever I send straight to Dr. Patel, who owns the practice, so it has to stand on its own with no editing.

The ticket notes are below, but don't quote them. She doesn't need the equipment names or the timeline, and she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved. That's a conversation for me and Dr. Patel, not this email. What she needs to know is that all three offices were down together for about 90 minutes, why in one plain sentence, that everyone was back by 10:25, and that no patient data was touched, because that's what she asked me on the phone and what she's afraid of.

The part I actually care about is what comes next. We're adding monitoring that warns us thirty days before any certificate expires, and it'll be in place by Friday. That's what "on top of it" means, so say that instead of the phrase.

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

The part I actually care about is what comes next. We're adding monitoring that warns us thirty days before any certificate expires, and it'll be in place by Friday. That's what "on top of it" means, so say that instead of the phrase.

Keep it under 150 words, plain language. Own it without groveling. Sign it from me, Tim at Northline IT.`

export const strongOutput = `Subject: Update on This Morning's Outage – All Clear

Hi Dana,

Sorry for the disruption this morning. All three offices lost connectivity to Dentrix for about 90 minutes because a security certificate on our network equipment expired. All locations were back up and confirmed working by 10:25 am.

No patient data was touched — your Dentrix server itself never went down, the offices just couldn't reach it during that window.

We're already on top of it: we're putting monitoring in place that will warn us 30 days before any certificate is set to expire, so this specific issue won't happen again. That'll be live by Friday.

Thanks for your patience this morning, and please pass this along to Dr. Patel.

Tim
Northline IT`

export const askPrompt = `That email wasn't what I needed. Looking back at what I gave you, what was missing from my request that you would have needed to write the one I had in my head?`

export const askOutput = `A few things I didn't have that would've changed the letter:

1. **Who the "client" recipient actually is.** I aimed it at Dana, but if this is going to the practice owner or a different stakeholder, the tone/detail level shifts — Dana already lived through this and got a call at 10:15; she may not need the full recap.

2. **How to handle the Q2 cert flag.** The ticket says this cert was flagged in Q2 review and nobody approved the renewal. I glossed over that entirely and just said "we've identified... wasn't being monitored" — which isn't accurate and dodges the real story. I didn't know: was the non-approval on us (we didn't escalate hard enough) or on them (they sat on it)? That fact determines whether this is a clean apology or one that needs to gently note shared responsibility without sounding defensive. I guessed wrong by omitting it.

3. **Whether a credit/compensation is expected.** P1, patient-facing, ~90 min outage across two sites — some MSPs proactively offer an SLA credit or a line about "no charge for this incident." I didn't know your policy, so I left it out rather than guess.

4. **Sender identity and signoff details.** I left placeholders. Who's actually signing this — you, a manager, the tech who worked it?

5. **Concrete commitment/date for the RMM fix**, not just "we're adding it." Clients often want a "by when," not an intention.

6. **Desired length/formality.** You didn't say short-and-warm vs. detailed-and-technical — I defaulted to a fairly full incident-report style, which may be more than Dana wants after already being walked through it live.

The biggest one is #2 — I effectively hid the fact that this was a known, previously-flagged risk, which is the detail most likely to matter to "the email you had in your head."`

// Same answer, headings only: each label is the model's own bold text, the
// explanations are omitted. Full text above.
export const askOutputHeadings = `A few things I didn't have that would've changed the letter:

1. **Who the "client" recipient actually is**
2. **How to handle the Q2 cert flag**
3. **Whether a credit/compensation is expected**
4. **Sender identity and signoff details**
5. **Concrete commitment/date for the RMM fix**
6. **Desired length/formality**`

// The model's own closing sentence from the same answer, unedited.
export const askOutputConfession = `The biggest one is #2 — I effectively hid the fact that this was a known, previously-flagged risk, which is the detail most likely to matter to "the email you had in your head."`
