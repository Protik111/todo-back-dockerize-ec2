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

const editTodo = async (
  id: string,
  payload: { status: "completed" | "uncompleted" | "paused" }
): Promise<ITodoResponse | null> => {
  const { status } = payload;

  const result = await prisma.todo.update({
    where: { id },
    data: { status },
  });

  return result as ITodoResponse;
};

const deleteTodo = async (id: number): Promise<ITodoResponse> => {
  const result = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return result;
};

export const TodoService = {
  createTodo,
  getTodos,
  editTodo,
  deleteTodo,
};
