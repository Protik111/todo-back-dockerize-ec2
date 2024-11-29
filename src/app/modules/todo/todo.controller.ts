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

export const TodoController = {
  createTodo,
  getTodos,
};
