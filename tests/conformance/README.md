# Conformance suite

Planned harness for canonical x402 and Stellar-specific acceptance tests on testnet and pubnet.

Coverage will include:

- unmodified canonical client success paths;
- `/supported` and fee-sponsorship truthfulness;
- canonical settlement payload and public transaction evidence;
- non-null rejection reasons;
- expired ledger bounds, trustline errors, replay and binding mismatch;
- Bazaar HTTP/MCP catalog equivalence;
- degraded dependencies and reconciliation after ambiguous submission.

Mainnet tests will use conservative values, explicit enablement and redacted logs.
