# Technical implementation team

This roster is the delivery ownership model for the corrected SCF resubmission.

**Official project contact:** `contact@aifinpay.com`  
**Website:** <https://aifinpay.io>  
**GitHub:** <https://github.com/AiFinPay>  
**Repository:** <https://github.com/AiFinPay/stellar-x402-facilitator>

## Delivery owners

| Contributor | Role | Accountable scope |
| --- | --- | --- |
| **Dmitry Buhaienko** | Founder & CEO | Product scope, RFP alignment, acceptance criteria, public evidence and SCF reporting |
| **Pavlo Bolhar** | CTO | Stellar facilitator, canonical x402 integration, payment correctness, signer boundary, conformance and production operations |
| **Pavel Svizinskiy** | Full-Stack Developer & Co-Founder | Bazaar discovery, ranking/evaluation, catalog/provenance implementation, MCP, SDK and reference integrations |
| **Iryna Zavorotnia** | Finance | Budget governance, cost evidence and milestone financial controls |

## Review ownership

| Workstream | Accountable owner | Required review |
| --- | --- | --- |
| Facilitator and Stellar settlement | Pavlo Bolhar | A second technical reviewer |
| Bazaar, ranking and discovery quality | Pavel Svizinskiy | Pavlo Bolhar for integration/reliability |
| MCP and SDK integration | Pavel Svizinskiy | Pavlo Bolhar where payment semantics are affected |
| Release/evidence package | Dmitry Buhaienko | Relevant technical owner |
| Budget evidence | Iryna Zavorotnia | Dmitry Buhaienko |

Security-sensitive payment, signing, authorization and settlement changes cannot be self-approved by the author.

## Pre-award engineering evidence

The following repository work is already completed before any new award and is not included as future funded work:

- runnable canonical Stellar facilitator;
- automated live testnet settlement test;
- deterministic Bazaar ranking implementation;
- held-out discovery benchmark and quality thresholds;
- CI evidence generation.

Future grant milestones start from this baseline rather than charging SCF to recreate it.
