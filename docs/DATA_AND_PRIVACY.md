# Data, Tracking, and Privacy

## Data minimization

The system is designed to process public resource metadata and payment state, not user profiles. It does not require names, email addresses, prompts, protected response bodies, or buyer private keys.

## Planned data categories

| Data                              | Purpose                      | Default retention                                              |
| --------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| Public resource metadata          | Discovery and search         | While verified and active, with history for integrity          |
| Seller ownership evidence         | Prevent impersonation        | Life of listing plus bounded audit period                      |
| Payment identifiers and tx hashes | Idempotency and support      | Bounded operational period; on-chain data remains public       |
| Redacted logs, metrics, traces    | Reliability and security     | Short, documented period                                       |
| Search query telemetry            | Quality and abuse prevention | Off by default for self-hosting; minimized for managed service |

Final retention durations and subprocessors must be published before production.

## User protection

- rate limits and abuse controls;
- no sale of query or payment telemetry;
- no hidden ranking based on private user identity;
- opt-out and revalidation for cataloged sellers;
- deletion process for off-chain data where technically and legally possible;
- access controls and audit trails for operational data;
- public incident notification policy.

## Tracking

Adoption metrics should be aggregate: active discoverable resources, successful searches, successful payments, latency, conformance, and availability. Metrics must not reconstruct an agent's browsing or purchasing history.
