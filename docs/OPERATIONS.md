# Operations

## Service objectives

The managed public endpoints target at least 99% monthly availability after production acceptance. Initial objectives are refined from measured testnet and mainnet behavior.

| Indicator                  | Initial objective                                        |
| -------------------------- | -------------------------------------------------------- |
| `/supported` availability  | 99.9%                                                    |
| Discovery API availability | 99%+                                                     |
| Verify/settle availability | 99%+, excluding confirmed network-wide Stellar incidents |
| Discovery lookup latency   | Interactive; target set after baseline                   |
| Settlement latency         | Reported separately from chain confirmation time         |
| Error reason completeness  | 100% of rejected requests                                |

## Observability

- structured logs with authorization and secret redaction;
- metrics for request volume, latency, errors, queue depth, channel availability, RPC health, catalog freshness, and settlement outcomes;
- distributed traces without private payload bodies;
- external synthetic checks on both networks;
- alert ownership and escalation paths.

## Degraded modes

- **RPC failure:** stop settlement, keep `/supported` honest, return retryable reason, and fail over only to validated providers.
- **Channel exhaustion:** queue within a strict bound, apply backpressure, and reject rather than reuse unsafe sequence state.
- **Database/index failure:** settlement remains isolated where safe; discovery reports degraded or unavailable status without stale claims.
- **Search model failure:** fall back to structured filters and lexical ranking.
- **Stellar network incident:** verification and settlement pause independently; status and recovery evidence are published.
- **Key compromise:** revoke/rotate affected operator keys, pause settlement, preserve evidence, and notify users.

## Production runbooks required

- deployment and rollback;
- key generation, storage, rotation, and revocation;
- channel-account creation and recovery;
- testnet reset recovery;
- database backup and restoration;
- RPC failover;
- incident severity and communication;
- conformance regression;
- catalog abuse and seller dispute;
- emergency pause and return to service.

## Release safety

Testnet canary precedes pubnet. Mainnet deployment uses immutable artifacts, reviewed configuration, least-privilege access, migrations with rollback, and post-deployment synthetic payments with bounded value.
