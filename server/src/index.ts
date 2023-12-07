import express from "express";
import cors from "cors";
import { appRouter } from "./server";
import * as trpcExpress from '@trpc/server/adapters/express';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })),

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
