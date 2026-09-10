import { writeFile, mkdir } from "node:fs/promises";
import { benchmarkResources, heldOutQueries } from "./benchmark";
import { searchResources } from "./search";

const K = 5;
const RECALL_FLOOR = 0.9;
const NDCG_FLOOR = 0.85;

function dcg(relevances: number[]): number {
  return relevances.reduce(
    (sum, relevance, index) =>
      sum + (relevance ? 1 / Math.log2(index + 2) : 0),
    0,
  );
}

let recallSum = 0;
let ndcgSum = 0;

const cases = heldOutQueries.map(testCase => {
  const ranked = searchResources(benchmarkResources, testCase.query, { limit: K });
  const ids = ranked.map(item => item.resource.id);
  const relevant = new Set(testCase.relevant);
  const hits = ids.filter(id => relevant.has(id)).length;
  const recall = hits / relevant.size;
  const gains = ids.map(id => (relevant.has(id) ? 1 : 0));
  const ideal = Array.from({ length: Math.min(relevant.size, K) }, () => 1);
  const ndcg = dcg(gains) / (dcg(ideal) || 1);

  recallSum += recall;
  ndcgSum += ndcg;

  return {
    query: testCase.query,
    relevant: testCase.relevant,
    returned: ids,
    recallAt5: Number(recall.toFixed(4)),
    ndcgAt5: Number(ndcg.toFixed(4)),
  };
});

const metrics = {
  benchmark: "bazaar-held-out-v1",
  queryCount: heldOutQueries.length,
  corpusSize: benchmarkResources.length,
  recallAt5: Number((recallSum / heldOutQueries.length).toFixed(4)),
  ndcgAt5: Number((ndcgSum / heldOutQueries.length).toFixed(4)),
  floors: {
    recallAt5: RECALL_FLOOR,
    ndcgAt5: NDCG_FLOOR,
  },
};

await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/discovery-evaluation.json",
  JSON.stringify({ metrics, cases }, null, 2) + "\n",
);

console.log(JSON.stringify(metrics));

if (
  metrics.recallAt5 < RECALL_FLOOR ||
  metrics.ndcgAt5 < NDCG_FLOOR
) {
  process.exitCode = 1;
}
