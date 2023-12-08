import express from "express";
import cors from "cors";
import { appRouter } from "./routers";
import * as trpcExpress from '@trpc/server/adapters/express';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })),

app.listen(port);

// export type definition of API
export type AppRouter = typeof appRouter;