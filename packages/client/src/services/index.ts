import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "api";
import { QueryClient } from "react-query";

export const trpc = createReactQueryHooks<AppRouter>();

export const client = new QueryClient();
