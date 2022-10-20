/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable prettier/prettier */
import { Server } from "miragejs";
import { games } from "./games";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({ environment });

  server.get("/api/games", { games });

  games.forEach((game) => {
    server.get(`/api/games/${game.id}`, game);
  });

  server.get("/api/rates", {
    USD: 1,
    EUR: 0.8738967054,
    GBP: 0.7869876781,
  });

  return server;
}
