# Bazaar discovery package

Deterministic discovery prototype for paid HTTP and MCP resources.

The current implementation provides:

- normalized resource records;
- network and scheme filters;
- deterministic BM25-style ranking;
- stable tie breaking;
- a published held-out benchmark;
- CI quality floors of Recall@5 >= 0.90 and NDCG@5 >= 0.85.

Run the evaluation:

```bash
npm run evaluate:discovery
```

The machine-readable result is written to
`artifacts/discovery-evaluation.json`.

Next implementation stages add persistent catalog storage, ownership/provenance verification, automatic registration, abuse controls, and MCP exposure without changing the benchmark contract.
