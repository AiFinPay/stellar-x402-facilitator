# Maintainers and review ownership

This repository is maintained by AiFinPay.

**Security and grant contact:** `contact@aifinpay.com`

## Maintainers

| Maintainer | Role | Repository responsibility |
| --- | --- | --- |
| **Pavlo Bolhar** | CTO | Facilitator architecture, Stellar/x402 correctness, backend, deployment, observability and production release gate |
| **Pavel Svizinskiy** | Full-Stack Developer & Co-Founder | Bazaar, ranking/evaluation, MCP, SDK, examples and developer integration surfaces |
| **Dmitry Buhaienko** | Founder & CEO | Scope, milestone acceptance, public evidence completeness and SCF coordination |

Budget governance is handled by Iryna Zavorotnia.

## Review rules

- Payment, signing, authorization, asset-handling and settlement changes require a technical reviewer other than the author.
- Protocol/wire-format changes require conformance fixtures.
- Canonical x402 and Stellar compatibility takes precedence over AiFinPay-specific convenience.
- Dependency changes must comply with `DEPENDENCY_POLICY.md`.
- Fund-touching releases require passing tests and explicit signer/secrets review.
- Vulnerabilities are reported privately under `SECURITY.md`.
