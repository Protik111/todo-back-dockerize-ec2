import prisma from "../../../shared/prisma";
import { ITodo, ITodoResponse } from "./todo.interface";

const createTodo = async (data: ITodo): Promise<ITodoResponse> => {
  const result = await prisma.todo.create({
    data,
  });

  return result;
};

export const TodoService = {
  createTodo,
};
