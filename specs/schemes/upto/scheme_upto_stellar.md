# Draft: `upto` payment scheme for Stellar

> Non-normative working draft for discussion with the x402 Technical Steering Committee. It is not an accepted x402 standard and must not be advertised as interoperable until the upstream process and conformance tests are complete.

## Intent

Allow a payer to authorize settlement up to a bounded maximum while the final charge is determined by the protected resource under explicit rules. The scheme should preserve Stellar-native authorization semantics and reuse the canonical `@x402/stellar` implementation surface.

## Proposed authorization fields

- Stellar network identifier;
- asset identifier and decimal semantics;
- maximum amount;
- payer and permitted payee;
- resource/method binding;
- nonce or unique authorization identifier;
- ledger/time validity window;
- optional usage/finalization constraints required by the upstream scheme.

## Verification invariants

1. The settled amount is non-negative and does not exceed the authorized maximum.
2. Network, asset, payer, payee and resource bindings match exactly.
3. Authorization is valid at the relevant ledger and has not expired.
4. Replay state is atomically reserved before submission.
5. The final amount is visible to the payer according to the upstream scheme's disclosure rules.
6. Stellar authorization entries are handled as native authorization entries, not assumed to be presigned transactions.

## Initial implementation boundary

The initial proposal is contract-free and therefore has a narrower trust model than a contract-enforced allowance. The facilitator verifies the bounded authorization and performs a single final settlement through the canonical Stellar package. This choice must be validated with the x402 TSC. If upstream semantics require multi-use allowance state or stronger independent enforcement, a Soroban design and its TTL/resource implications will be proposed separately.

## Required upstream work

- confirm canonical payload and payment-requirements schemas;
- specify price-finalization authority and user disclosure;
- define replay/idempotency behavior across facilitators;
- define partial use, cancellation and failure semantics;
- add positive, negative and adversarial vectors;
- implement in the Stellar package and submit spec/code/tests for upstream review.

## Out of scope

Batch settlement and authorization-capture are not part of this proposal.
