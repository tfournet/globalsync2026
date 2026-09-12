Subject: Resolved – Dentrix Access Outage at Midtown & Riverside (Ticket #48213)

Dana,

I want to sincerely apologize for the disruption this morning at Midtown and Riverside — I know a full waiting room with no access to Dentrix is the last thing you need, and we're sorry for the stress it caused your team.

Here's a quick summary of what happened and what we did:

**What happened:** The secure network connection (VPN tunnel) between your branch offices and the main office server expired due to an SSL certificate that lapsed overnight. This caused Midtown and Riverside to lose their connection to the Dentrix database, even though the server itself was never down and no patient data was affected or at risk.

**What we did:** Our team caught the tunnel failures shortly after you called, identified the expired certificate as the root cause, and immediately requested a new one. Once issued, we installed it and restored the connections. All three sites were confirmed back up and working normally by 10:25 AM — total downtime was under two hours.

**Going forward:** We've identified that this certificate wasn't being actively monitored for expiration, and we're on top of it — we're adding automated alerting for certificate expiration dates to our monitoring system so this type of issue is caught and resolved before it can impact your sites again.

Thank you for your patience while we worked through this, and please don't hesitate to reach out if you have any questions or if anything still seems off at either location.

Best regards,
[Your Name]
[Company Name] Service Desk