import {
  createStellarFacilitatorFromEnv,
  startFacilitatorHttpServer,
} from "./index";

const { facilitator, network } = createStellarFacilitatorFromEnv();
const server = startFacilitatorHttpServer(facilitator);

server.on("listening", () => {
  const address = server.address();
  console.log(
    JSON.stringify({
      event: "facilitator_started",
      network,
      address,
      supported: facilitator.getSupported(),
    }),
  );
});
