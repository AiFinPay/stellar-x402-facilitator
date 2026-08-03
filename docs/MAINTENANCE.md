# Maintenance and Upstream Alignment

## Commitment

AiFinPay intends to operate and maintain the project after the SCF grant. The final application must name accountable maintainers and the funded versus post-grant maintenance window.

## Preventing protocol drift

- monitor x402 Foundation releases, Bazaar specification changes, and Stellar SDK releases;
- run scheduled compatibility tests against canonical clients and public baselines;
- keep dependency updates automated but human-reviewed;
- publish a compatibility matrix for every release;
- treat wire-level regression as a release blocker;
- coordinate `upto` design and contributions through the x402 Technical Steering Committee;
- maintain a clean handoff path for ecosystem contributors.

## Release cadence

- security releases: as required;
- conformance fixes: prioritized and released after evidence passes;
- normal maintenance: scheduled, documented releases;
- breaking changes: avoided; when upstream requires one, provide migration guidance.

## Sustainability

The core code, specs, tests, and documentation remain open. A managed service may fund ongoing operations, but canonical self-hosting cannot depend on a paid AiFinPay license or proprietary protocol extension.
