# Contributing

Thank you for helping build open payment infrastructure for agents on Stellar.

## Before contributing

1. Read the [Code of Conduct](CODE_OF_CONDUCT.md), [Security Policy](SECURITY.md), and [Dependency Policy](DEPENDENCY_POLICY.md).
2. Search existing issues and discussions before proposing duplicate work.
3. For protocol, security, data-model, dependency, or compatibility changes, open an issue and ADR before implementation.
4. Never include secrets, real private keys, personal data, or production transaction payloads.

## Development workflow

1. Fork the repository and create a focused branch.
2. Keep commits small and signed when possible.
3. Add or update tests and documentation with every behavior change.
4. Run `npm run check` and the applicable package tests.
5. Open a pull request using the repository template.

## Required pull request evidence

- problem and intended behavior;
- affected x402 and Stellar specification clauses;
- tests and conformance evidence;
- security and privacy impact;
- migration or rollback plan when applicable;
- dependency and license impact;
- documentation changes.

## Protocol compatibility

Wire-format changes require conformance fixtures and upstream alignment. This project must accept canonical x402 v2 inputs without proprietary fields being required. AiFinPay extensions must be optional, namespaced, and backward-compatible.

## Contribution license

Unless explicitly marked otherwise, contributions intentionally submitted to this repository are provided under Apache-2.0, as described in Section 5 of the license. Contributors must have the right to submit their work.
