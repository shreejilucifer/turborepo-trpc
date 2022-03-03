import { z } from "zod";
import { createRouter } from "../app/app.router";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodoStatus,
} from "./todo.controller";

export const todos = createRouter()
  .query("get", {
    resolve: getTodos,
  })
  .mutation("create", {
    input: z.string().min(3),
    resolve: ({ input }) => createTodo(input),
  })
  .mutation("delete", {
    input: z.number(),
    resolve: ({ input }) => deleteTodo(input),
  })
  .mutation("update", {
    input: z.number(),
    resolve: ({ input }) => updateTodoStatus(input),
  });
