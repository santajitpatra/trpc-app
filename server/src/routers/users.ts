import { z } from "zod";
import { t } from "../trpc";

const userProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const userRouter = t.router({
  get: userProcedure.query(({ input }) => {
    return { id: input.userId };
  }),
});
