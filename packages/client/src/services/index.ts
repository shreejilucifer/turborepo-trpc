import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "api";

export const trpc = createReactQueryHooks<AppRouter>();
