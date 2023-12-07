import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure.query(() => {
    return { name: "John Doe" };
  }),
  createUser: t.procedure
    .input((v) => {
      if (typeof v === "string") return  v ;
      throw new Error("Invalid input");
    })
    .mutation((req) => {
      console.log(`first ${req.input}`);
      return true;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
