import { t } from "../trpc";
import { userRouter } from "./users";


export const appRouter = t.router({
  getUserOld: t.procedure.query(() => {
    return { name: "John Doe" };
  }),
  createUser: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid input");
    })
    .mutation((req) => {
      console.log(`first ${req.input}`);
      return true;
    }),
    users: userRouter
});

export const mergedRouter = t.mergeRouters(appRouter,userRouter)
