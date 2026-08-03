# Error taxonomy

Errors are deterministic, machine-readable and safe for public clients. Canonical x402 rejection fields are preserved; project-specific detail is additive and versioned.

| Code family   | Example code                | Retry               | Meaning                                             |
| ------------- | --------------------------- | ------------------- | --------------------------------------------------- |
| Request       | `INVALID_REQUEST`           | No                  | Schema or required field is invalid                 |
| Capability    | `UNSUPPORTED_NETWORK`       | No                  | Network is not enabled                              |
| Capability    | `UNSUPPORTED_SCHEME`        | No                  | Scheme is not supported for the network             |
| Asset         | `UNSUPPORTED_ASSET`         | No                  | Asset is outside policy                             |
| Asset         | `TRUSTLINE_REQUIRED`        | After correction    | Required trustline is absent or unusable            |
| Authorization | `AUTH_EXPIRED`              | New authorization   | Ledger/time validity has elapsed                    |
| Authorization | `AUTH_BINDING_MISMATCH`     | No                  | Resource, value, party or network binding differs   |
| Replay        | `PAYMENT_ALREADY_USED`      | Idempotent lookup   | Authorization has already been consumed             |
| Policy        | `PAYMENT_LIMIT_EXCEEDED`    | After policy change | Configured risk/amount limit rejects the request    |
| Stellar       | `STELLAR_SIMULATION_FAILED` | Conditional         | Stellar simulation/preflight failed                 |
| Stellar       | `STELLAR_SUBMISSION_FAILED` | Conditional         | Network submission failed; state must be reconciled |
| Discovery     | `RESOURCE_NOT_VERIFIED`     | After verification  | Publisher ownership/provenance is incomplete        |
| Discovery     | `QUERY_NOT_SUPPORTED`       | No                  | Search expression cannot be safely handled          |
| Capacity      | `RATE_LIMITED`              | Yes                 | Client exceeded a published limit                   |
| Service       | `TEMPORARILY_UNAVAILABLE`   | Yes                 | Dependency or safe degraded mode blocks operation   |
| Internal      | `INTERNAL_ERROR`            | Conditional         | Unclassified failure with a correlation ID          |

Every rejection includes a non-null reason. Public detail must not expose secrets, internal topology, raw authorization material or security-sensitive validation order.
