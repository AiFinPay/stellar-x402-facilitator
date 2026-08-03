# Release checklist

## Code and compatibility

- [ ] Canonical `@x402/stellar` version and upstream test revision are pinned.
- [ ] Unit, integration, conformance, negative and replay suites pass.
- [ ] Testnet and pubnet configuration are intentionally separate.
- [ ] `/supported`, payload shape, transaction evidence and rejection reasons pass contract tests.
- [ ] Dependency, license and SBOM reports are reviewed.

## Security and operations

- [ ] Threat model reviewed for this release.
- [ ] No credentials or customer data are committed or logged.
- [ ] Signing limits, rotation, shutdown and recovery are exercised.
- [ ] Backup/restore, reconciliation and degraded-mode drills pass.
- [ ] Alerts, dashboards, SLOs and on-call ownership are active.
- [ ] Audit findings are resolved or explicitly risk-accepted by authorized maintainers.

## Documentation and evidence

- [ ] Clean-room quickstart completes in under one hour.
- [ ] Both examples run against the tagged release.
- [ ] Compatibility matrix, changelog and migration notes are current.
- [ ] Public transaction evidence is recorded without sensitive data.
- [ ] Grant evidence register and milestone status are updated.

## Mainnet go/no-go

- [ ] Conservative limits and balances are configured.
- [ ] Rollback and kill-switch criteria are agreed.
- [ ] Release owner, security owner and incident commander are named.
- [ ] Known limitations are public.
- [ ] Final approval is recorded.
