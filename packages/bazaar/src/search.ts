export interface BazaarResource {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  network: string;
  scheme: string;
  mimeType?: string;
}

export interface BazaarSearchOptions {
  network?: string;
  scheme?: string;
  limit?: number;
}

export interface RankedResource {
  resource: BazaarResource;
  score: number;
  matchedTerms: string[];
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function weightedDocument(resource: BazaarResource): string[] {
  return [
    ...tokenize(resource.title),
    ...tokenize(resource.title),
    ...tokenize(resource.title),
    ...resource.tags.flatMap(tag => [...tokenize(tag), ...tokenize(tag)]),
    ...tokenize(resource.description),
  ];
}

export function searchResources(
  resources: BazaarResource[],
  query: string,
  options: BazaarSearchOptions = {},
): RankedResource[] {
  const terms = [...new Set(tokenize(query))];
  if (terms.length === 0) return [];

  const filtered = resources.filter(resource => {
    if (options.network && resource.network !== options.network) return false;
    if (options.scheme && resource.scheme !== options.scheme) return false;
    return true;
  });

  if (filtered.length === 0) return [];

  const documents = filtered.map(resource => ({
    resource,
    tokens: weightedDocument(resource),
  }));

  const averageLength =
    documents.reduce((sum, item) => sum + item.tokens.length, 0) /
    documents.length;
  const k1 = 1.2;
  const b = 0.75;

  const ranked = documents.map(document => {
    const frequencies = new Map<string, number>();
    for (const token of document.tokens) {
      frequencies.set(token, (frequencies.get(token) ?? 0) + 1);
    }

    let score = 0;
    const matchedTerms: string[] = [];

    for (const term of terms) {
      const tf = frequencies.get(term) ?? 0;
      if (tf === 0) continue;

      const documentFrequency = documents.reduce(
        (count, item) => count + (item.tokens.includes(term) ? 1 : 0),
        0,
      );
      const idf = Math.log(
        1 + (documents.length - documentFrequency + 0.5) / (documentFrequency + 0.5),
      );
      const denominator =
        tf + k1 * (1 - b + b * (document.tokens.length / averageLength));
      score += idf * ((tf * (k1 + 1)) / denominator);
      matchedTerms.push(term);
    }

    return {
      resource: document.resource,
      score: Number(score.toFixed(8)),
      matchedTerms,
    };
  });

  return ranked
    .filter(item => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.resource.id.localeCompare(b.resource.id),
    )
    .slice(0, options.limit ?? 20);
}
