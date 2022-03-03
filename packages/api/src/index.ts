import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import { createRouter } from "./app/app.router";
import { todos } from "./todo/todo.router";

const appRouter = createRouter().merge("todos.", todos);

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.listen(4000, () => {
  console.log("The application is listening on port 4000!");
});
