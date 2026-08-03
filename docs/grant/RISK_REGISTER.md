# Delivery risk register

| Risk                            | Likelihood | Impact   | Mitigation                                                                       | Owner           | Trigger/evidence                    |
| ------------------------------- | ---------- | -------- | -------------------------------------------------------------------------------- | --------------- | ----------------------------------- |
| Canonical package/spec changes  | Medium     | High     | Pin versions, weekly upstream review, compatibility suite                        | TO_BE_CONFIRMED | Breaking CI or upstream release     |
| Mainnet key compromise          | Low        | Critical | Isolated signer, least privilege, small balances, rotation/kill switch           | TO_BE_CONFIRMED | Signing anomaly or secret exposure  |
| Replay/front-running flaw       | Medium     | High     | Strict binding, ledger validity, idempotency and adversarial tests               | TO_BE_CONFIRMED | Duplicate or mismatched settlement  |
| Discovery spam/spoofing         | High       | Medium   | Ownership proof, provenance, moderation and rate limits                          | TO_BE_CONFIRMED | Abuse-rate threshold                |
| Stellar throughput saturation   | Medium     | High     | Capacity tests, channel accounts, fee bump and documented caps                   | TO_BE_CONFIRMED | Queue/SLO threshold                 |
| `upto` upstream rejection/delay | Medium     | Medium   | Early TSC coordination; milestone based on reviewable contribution, not merge    | TO_BE_CONFIRMED | Maintainer objection or no response |
| Eight-week staffing conflict    | Medium     | High     | Confirm allocation before submission, single milestone owner, weekly burn review | TO_BE_CONFIRMED | Missed weekly gate                  |
| Budget considered inflated      | Medium     | High     | Person-week costing and eligible-output mapping; remove promotion/past work      | TO_BE_CONFIRMED | Internal review variance            |
| Audit finding delays release    | Medium     | High     | Threat model early, pre-audit checklist, reserve remediation capacity            | TO_BE_CONFIRMED | High-severity finding               |
| Repository not public           | Low        | High     | Change visibility before submission and verify logged-out access                 | TO_BE_CONFIRMED | Pre-submit check fails              |
