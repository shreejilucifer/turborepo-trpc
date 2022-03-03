import * as trpc from "@trpc/server";
import { Context } from "./app.context";

export const createRouter = () => {
  return trpc.router<Context>();
};
