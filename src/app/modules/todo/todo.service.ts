import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";
import { ITodo, ITodoResponse } from "./todo.interface";

const createTodo = async (data: ITodo): Promise<ITodoResponse> => {
  const result = await prisma.todo.create({
    data,
  });

  return result;
};

const getTodos = async (): Promise<ITodoResponse[] | null> => {
  const result = await prisma.todo.findMany();
  if (result?.length === 0) {
    throw new ApiError(400, "Todos not found");
  }

  return result;
};

export const TodoService = {
  createTodo,
  getTodos,
};
