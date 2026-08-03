# Security Policy

## Current status

The repository is in pre-implementation. No release is approved for production use. A production tag will not be issued before conformance testing and third-party security review.

## Reporting a vulnerability

Do not open public issues for suspected vulnerabilities. Email `contact@aifinpay.company` with the subject `SECURITY: Stellar x402 Facilitator` and include:

- affected component and version or commit;
- impact and attack prerequisites;
- reproducible steps or proof of concept;
- suggested remediation, if available;
- whether disclosure is time-sensitive.

Do not access data that is not yours, disrupt services, move funds, persist access, or publish details before coordination.

## Response targets

| Stage                                          | Target              |
| ---------------------------------------------- | ------------------- |
| Acknowledgement                                | 2 business days     |
| Initial severity assessment                    | 5 business days     |
| Remediation plan for confirmed critical issues | 7 business days     |
| Coordinated disclosure                         | Agreed case by case |

Targets are service goals, not warranties.

## Scope planned for review

- payment payload and requirements validation;
- Stellar auth-entry validation and expiration;
- replay, duplicate-settlement, front-running, and fee-abuse resistance;
- recipient, asset, amount, scheme, network, and resource binding;
- channel-account and fee-bump key isolation;
- Bazaar seller identity, listing ownership, route-template, and price integrity;
- MCP input validation and deterministic error handling;
- secret storage, rotation, observability redaction, and incident response;
- `upto` authorization and settlement trust boundaries.

See [Security Model](docs/SECURITY_MODEL.md) and [Threat Model](docs/THREAT_MODEL.md).
