# Threat Model

## Assets

- buyer payment authorization;
- facilitator and fee-payer keys;
- seller listing ownership and pricing integrity;
- transaction idempotency records;
- service availability and audit evidence;
- private operational and security data.

## Principal threats and controls

| Threat                   | Example                                    | Planned controls                                                                   |
| ------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| Replay                   | Same authorization settled twice           | Ledger expiration, unique authorization identity, atomic idempotency, chain lookup |
| Front-running            | Third party submits observed authorization | Recipient binding, invocation validation, short expiry, canonical auth-entry rules |
| Recipient substitution   | Facilitator changes `payTo`                | Signed binding and exact equality checks                                           |
| Amount/cap escalation    | Settlement exceeds requirement             | Atomic-unit bounds, canonical requirements comparison, `upto` cap enforcement      |
| Network confusion        | Testnet authorization used on pubnet       | CAIP-2 and network-passphrase binding                                              |
| Fee/resource abuse       | Crafted payload drains facilitator fees    | Fee ceiling, Soroban resource limits, simulation, rate limits                      |
| Sequence denial          | Single signer blocked under burst          | Channel-account pool, health tracking, backpressure                                |
| Seller spoofing          | Attacker lists another seller's endpoint   | Origin challenge, signed ownership evidence, provenance, revalidation              |
| Price poisoning          | Catalog shows modified price               | Preserve observed canonical metadata and content hash; no silent rewrite           |
| Route-template injection | Malicious path captures arbitrary requests | Strict template parser, origin/path constraints, SSRF defenses                     |
| Search abuse             | Spam dominates natural-language results    | Reputation-neutral quality controls, rate limits, deduplication, abuse review      |
| SSRF                     | Catalog worker fetches internal service    | Egress allow/deny policy, DNS/IP recheck, redirect and port limits                 |
| Secret disclosure        | Key appears in telemetry                   | Structured redaction, denylist tests, least privilege, no payload logging          |
| Dependency compromise    | Malicious package release                  | Lockfile, provenance, SBOM, review, scanning, minimal dependencies                 |
| MCP tool injection       | Untrusted metadata alters agent behavior   | Treat descriptions as data, typed outputs, no executable instructions              |
| Availability attack      | Burst traffic exhausts settlement          | Admission control, queues, autoscaling, circuit breakers, degraded mode            |

## Residual `upto` risk

A contract-free v1 cannot provide the same on-chain recipient binding and single-settlement guarantees as a dedicated Soroban contract. The final application must present this limitation plainly. The Technical Steering Committee review determines whether the residual model is acceptable or whether a contract-backed design becomes required.
