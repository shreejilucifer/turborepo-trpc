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

export const updateTodoStatus = async (id: number): Promise<Todo | null> => {
  let todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return null;

  todo = await prisma.todo.update({
    where: { id },
    data: { status: !todo.status },
  });

  return todo;
};
