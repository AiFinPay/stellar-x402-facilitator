import type { BazaarResource } from "./search";

export const benchmarkResources: BazaarResource[] = [
  { id: "weather", title: "Weather Forecast API", description: "Current weather and multi-day forecasts by city and coordinates.", tags: ["weather", "forecast", "climate"], url: "https://example.test/weather", network: "stellar:testnet", scheme: "exact" },
  { id: "news", title: "News Archive Search", description: "Search recent and historical news articles and publisher archives.", tags: ["news", "articles", "archive"], url: "https://example.test/news", network: "stellar:testnet", scheme: "exact" },
  { id: "crypto", title: "Real-time Crypto Prices", description: "Live cryptocurrency market prices, quotes and token data.", tags: ["crypto", "prices", "market"], url: "https://example.test/crypto", network: "stellar:testnet", scheme: "exact" },
  { id: "sports", title: "Live Sports Scores", description: "Real-time football, basketball and tennis scores.", tags: ["sports", "football", "scores"], url: "https://example.test/sports", network: "stellar:testnet", scheme: "exact" },
  { id: "flights", title: "Flight Status API", description: "Flight delays, departures, arrivals and airport status.", tags: ["flight", "delay", "airport"], url: "https://example.test/flights", network: "stellar:testnet", scheme: "exact" },
  { id: "registry", title: "Company Registry Records", description: "Corporate registration, directors and company records.", tags: ["company", "registry", "corporate"], url: "https://example.test/registry", network: "stellar:testnet", scheme: "exact" },
  { id: "science", title: "Scientific Papers Search", description: "Search research papers, abstracts and academic publications.", tags: ["research", "papers", "science"], url: "https://example.test/science", network: "stellar:testnet", scheme: "exact" },
  { id: "images", title: "AI Image Generation", description: "Generate images from natural language prompts.", tags: ["ai", "image", "generation"], url: "https://example.test/images", network: "stellar:testnet", scheme: "exact" },
  { id: "geo", title: "Geocoding API", description: "Convert street addresses into latitude and longitude coordinates.", tags: ["maps", "latitude", "longitude"], url: "https://example.test/geo", network: "stellar:testnet", scheme: "exact" },
  { id: "jobs", title: "Job Listings Feed", description: "Search open jobs, vacancies and employer listings.", tags: ["jobs", "vacancies", "employment"], url: "https://example.test/jobs", network: "stellar:testnet", scheme: "exact" },
  { id: "legal", title: "Legal Filings Database", description: "Court filings, case documents and public legal records.", tags: ["legal", "court", "filings"], url: "https://example.test/legal", network: "stellar:testnet", scheme: "exact" },
  { id: "datasets", title: "Machine Learning Datasets", description: "Curated datasets for model training and evaluation.", tags: ["machine learning", "datasets", "training"], url: "https://example.test/datasets", network: "stellar:testnet", scheme: "exact" }
];

export interface BenchmarkQuery {
  query: string;
  relevant: string[];
}

export const heldOutQueries: BenchmarkQuery[] = [
  { query: "weather forecast api", relevant: ["weather"] },
  { query: "historical news articles archive", relevant: ["news"] },
  { query: "real time crypto prices", relevant: ["crypto"] },
  { query: "latest football scores", relevant: ["sports"] },
  { query: "flight delay status", relevant: ["flights"] },
  { query: "company registration records", relevant: ["registry"] },
  { query: "research papers search", relevant: ["science"] },
  { query: "AI image generation", relevant: ["images"] },
  { query: "latitude longitude maps", relevant: ["geo"] },
  { query: "open job vacancies", relevant: ["jobs"] }
];
