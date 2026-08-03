# API contracts

This document defines the intended public surface. Exact schemas will be versioned in machine-readable OpenAPI and MCP artifacts during implementation. Canonical x402 schemas always take precedence where applicable.

## Facilitator endpoints

### `GET /supported`

Returns supported network, scheme and asset combinations plus operational capabilities. For each Stellar entry, `areFeesSponsored` must reflect actual configured behavior and never an aspirational feature.

### `POST /verify`

Validates a canonical payment payload without settling it. Checks include network, scheme, asset, amount, payer/payee binding, resource binding, ledger validity, trustlines, replay state and configured policy. Rejections use the [error taxonomy](ERROR_TAXONOMY.md).

### `POST /settle`

Performs canonical settlement through `@x402/stellar` after verification and idempotency reservation. A successful canonical response includes the expected `payload` object with `transaction` evidence. The service persists only the minimum operational record.

## Discovery endpoints

The exact Bazaar path names will track the applicable x402 specification and upstream test suite.

- catalog registration derived from paid HTTP/MCP resources;
- list/get normalized resource metadata;
- structured filtering by network, asset, price, capability and provenance;
- natural-language search returning deterministic structured results and scores;
- ownership and moderation status without leaking private operator data.

## MCP surface

The MCP server will expose versioned discovery tools with JSON Schema inputs and outputs. Tool calls return the same normalized catalog entities as HTTP discovery. Failures use stable codes and retry guidance.

## Cross-cutting rules

- Every mutation accepts an idempotency key or derives one from the canonical payment identity.
- Request and response size limits are explicit.
- Correlation IDs are safe to log and do not encode secrets.
- Unknown JSON fields follow the canonical upstream compatibility policy.
- Private keys and raw reusable authorization material never appear in API responses.
- Breaking changes require a versioned endpoint or a published deprecation window.
