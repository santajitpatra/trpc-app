import { initTRPC } from "@trpc/server";
import { appRouter } from "./routers";

export const t = initTRPC.create();

// export type definition of API
export type AppRouter = typeof appRouter;
