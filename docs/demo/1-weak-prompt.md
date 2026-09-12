Write an email to the client about this. Apologize and let them know we're on top of it.

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
