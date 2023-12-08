import express from "express";
import cors from "cors";
import { appRouter } from "./routers";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./context";
import ws from "ws";
import { applyWSSHandler } from "@trpc/server/adapters/ws";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
);

const server = app.listen(port);

const wss = new ws.Server({ server });

applyWSSHandler({
  wss,
  router: appRouter,
  createContext
});

// export type definition of API
export type AppRouter = typeof appRouter;
