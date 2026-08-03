# Decentralization and Operator Model

The first managed deployment is operated by AiFinPay, but the protocol surface and codebase must not require AiFinPay.

## Decentralization commitments

- permissive Apache-2.0 source license;
- self-hosted facilitator and Bazaar deployment path;
- canonical x402 wire format without required proprietary extensions;
- portable PostgreSQL-backed catalog and export format;
- published conformance suite usable by independent operators;
- upstream contribution of the Stellar `upto` specification and reusable helpers;
- multiple facilitator and catalog endpoints can coexist;
- sellers retain control of origins, pricing, assets, and destinations;
- buyers may choose operators and wallets.

## Remaining centralized elements

Each hosted facilitator controls its own settlement signing infrastructure, availability, admission controls, and catalog moderation. Natural-language ranking is operator-specific. These facts must be visible to users and do not grant an operator authority over Stellar or x402.

The project will document export, federation, and clean-handoff paths so the ecosystem can maintain the service if AiFinPay stops operating it.
