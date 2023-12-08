import {
  createTRPCProxyClient,
  createWSClient,
  httpBatchLink,
  splitLink,
  wsLink,
} from "@trpc/client";
import type { AppRouter } from "../../server/src";

export const wsClient = createWSClient({
  url: "ws://localhost:3000/trpc",
});
export const client = createTRPCProxyClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => {
        // check for context property `skipBatch`
        return op.type === "subscription";
      },
      true: wsLink({
        client: wsClient,
      }),
      // when condition is false, use batching
      false: httpBatchLink({
        url: "http://localhost:3000/trpc",
        headers: { Authorization: "TOKEN" },
      }),
    }),
  ],
});
