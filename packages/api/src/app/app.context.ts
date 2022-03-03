import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = (
  opts?: trpcExpress.CreateExpressContextOptions
) => {
  console.log(opts?.req.method);
  return null;
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
