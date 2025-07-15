import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TodoService } from "./todo.service";
import { ITodoResponse } from "./todo.interface";

const createTodo = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoService.createTodo(req.body);

  sendResponse<ITodoResponse>(res, {
    statusCode: 201,
    success: true,
    message: "Todo created successfully!",
    data: result,
  });
});

const getTodos = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoService.getTodos();

  sendResponse<ITodoResponse[] | null>(res, {
    statusCode: 200,
    success: true,
    message: "Todo fetched successfully!",
    data: result,
  });
});

const editTodo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // const idStr = id.toString();
  const result = await TodoService.editTodo(id, req.body);

  sendResponse<ITodoResponse | null>(res, {
    statusCode: 200,
    success: true,
    message: "Todo updated successfully!",
    data: result,
  });
});

const deleteTodo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // const idStr = id.toString();
  const result = await TodoService.deleteTodo(id);

  sendResponse<ITodoResponse | null>(res, {
    statusCode: 200,
    success: true,
    message: "Todo deleted successfully!",
    data: result,
  });
});

export const TodoController = {
  createTodo,
  getTodos,
  editTodo,
  deleteTodo,
};
