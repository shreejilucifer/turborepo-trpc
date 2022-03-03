import { Todo } from "@prisma/client";
import prisma from "../db";

export const getTodos = async (): Promise<Todo[]> => {
  return prisma.todo.findMany();
};

export const createTodo = async (input: string): Promise<Todo> => {
  const todo = await prisma.todo.create({
    data: { item_text: input, status: false },
  });

  return todo;
};

export const deleteTodo = async (id: number): Promise<boolean> => {
  await prisma.todo.delete({ where: { id } });
  return true;
};
