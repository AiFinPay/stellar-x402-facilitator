import { describe, expect, it } from "vitest";
import { benchmarkResources } from "./benchmark";
import { searchResources } from "./search";

describe("Bazaar search", () => {
  it("ranks the directly relevant resource first", () => {
    const results = searchResources(
      benchmarkResources,
      "real time crypto prices",
      { limit: 5 },
    );
    expect(results[0]?.resource.id).toBe("crypto");
  });

  it("supports network filters", () => {
    const resources = [
      ...benchmarkResources,
      {
        ...benchmarkResources[0],
        id: "weather-mainnet",
        network: "stellar:pubnet",
      },
    ];
    const results = searchResources(resources, "weather forecast", {
      network: "stellar:pubnet",
    });
    expect(results.map(item => item.resource.id)).toEqual(["weather-mainnet"]);
  });

  it("is deterministic for equal scores", () => {
    const resources = [
      { ...benchmarkResources[0], id: "b" },
      { ...benchmarkResources[0], id: "a" },
    ];
    const results = searchResources(resources, "weather");
    expect(results.map(item => item.resource.id)).toEqual(["a", "b"]);
  });

  it("returns no results for an empty query", () => {
    expect(searchResources(benchmarkResources, "   ")).toEqual([]);
  });
});
