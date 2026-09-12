I need to send Dana Whitfield an email about this morning's outage. She's the office manager at Harbor Dental, three locations, and she's the one the front desk complains to. She isn't technical and doesn't want to be. She'll forward whatever I send straight to Dr. Patel, who owns the practice, so it has to stand on its own with no editing.

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
Root cause: cert expiry, no monitoring/alerting on cert dates. Recommend adding to RMM.
