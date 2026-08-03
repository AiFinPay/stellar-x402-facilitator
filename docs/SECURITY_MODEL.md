# Security Model

## Security objectives

- settle only the payment a buyer authorized;
- prevent replay and duplicate settlement;
- bind scheme, network, asset, amount/cap, recipient, resource, and expiration;
- prevent facilitator fee abuse and unexpected Soroban resource consumption;
- prevent discovery impersonation and price substitution;
- isolate signing authority and minimize blast radius;
- produce auditable, privacy-preserving evidence.

## Trust boundaries

| Boundary        | Trust assumption                              | Required control                                        |
| --------------- | --------------------------------------------- | ------------------------------------------------------- |
| Buyer wallet    | Protects buyer key and confirms authorization | Client-side signing; no key upload                      |
| Resource server | States price and protected resource           | Canonical requirement validation and origin binding     |
| Facilitator     | Validates and submits authorized payment      | Least privilege, idempotency, audit, key isolation      |
| Stellar RPC     | Reports and submits network state             | Multiple providers, timeouts, consistency checks        |
| Bazaar catalog  | Indexes public seller metadata                | Ownership verification, revalidation, provenance        |
| Search ranking  | Orders results                                | No hidden price mutation; evaluation and abuse controls |
| MCP runtime     | Calls tools on an agent's behalf              | Typed schemas, local signing boundary, spending policy  |

## Required validation

The facilitator rejects requests that fail any applicable check:

- protocol version and schema;
- supported scheme/network pair;
- exact CAIP-2 identifier;
- canonical payload structure;
- valid Stellar address and SEP-41 asset;
- auth-entry signer, signature, network passphrase, and expiration;
- amount or cap bounds;
- recipient equality;
- transaction invocation structure;
- resource and payment-requirement binding;
- transaction fee and Soroban resource ceilings;
- replay/idempotency state;
- trustline and account readiness;
- simulation result where supported.

## Key management

- buyer keys never enter the service;
- facilitator, fee-bump, and channel keys are separate;
- production secrets are encrypted and access-audited;
- rotation is tested before launch;
- logs, traces, errors, and support artifacts redact secrets and raw authorizations;
- emergency pause and key-compromise procedures are documented and rehearsed.

## Security release gates

1. Threat model reviewed.
2. Unit, integration, negative, fuzz/property, and conformance tests passing.
3. Dependency and container scanning clean at the defined severity threshold.
4. Third-party security review completed.
5. Critical and high findings resolved; accepted residual risks documented.
6. Mainnet key and incident runbooks approved.
