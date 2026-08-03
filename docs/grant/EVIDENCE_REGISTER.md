# Evidence register

This register will become the index reviewers and maintainers use to reproduce delivery claims.

| Evidence ID | Claim or gate                           | Artifact                                         | Network/version          | Status                 |
| ----------- | --------------------------------------- | ------------------------------------------------ | ------------------------ | ---------------------- |
| E-001       | Architecture prepared before submission | `docs/ARCHITECTURE.md` and ADRs                  | Draft v0                 | Available              |
| E-002       | Security risks identified               | `docs/SECURITY_MODEL.md`, `docs/THREAT_MODEL.md` | Draft v0                 | Available              |
| E-003       | RFP coverage planned                    | `docs/grant/RFP_COMPLIANCE_MATRIX.md`            | SCF #45                  | Available              |
| E-004       | Repository license is permissive        | `LICENSE`, `DEPENDENCY_POLICY.md`                | Apache-2.0               | Available              |
| E-100       | Canonical client testnet success        | CI run, logs, transaction hash                   | stellar:testnet          | Pending implementation |
| E-101       | Canonical client pubnet success         | CI run, redacted logs, transaction hash          | stellar:pubnet           | Pending implementation |
| E-102       | Rejection reason conformance            | Negative test report                             | Both                     | Pending implementation |
| E-103       | Bazaar discovery conformance            | Test report and demo                             | Release candidate        | Pending implementation |
| E-104       | MCP deterministic schemas/errors        | MCP inspector and automated tests                | Release candidate        | Pending implementation |
| E-105       | Under-one-hour onboarding               | Clean-room recording/log and timings             | Tagged release           | Pending implementation |
| E-106       | Reliability and degraded mode           | Load/failover report and dashboard export        | Production candidate     | Pending implementation |
| E-107       | Security review                         | Audit Bank scope and remediation record          | Tagged release           | Pending implementation |
| E-108       | `upto` upstream coordination            | x402 TSC issue/PR and response log               | Pinned upstream revision | Pending implementation |
| E-109       | Role-based documentation                | Public Stellar documentation PR/status           | Tagged release           | Pending implementation |

Never put private keys, authorization payloads, personal data, internal endpoints or embargoed security findings in public evidence.
