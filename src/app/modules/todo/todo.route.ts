import { Router } from "express";
import { TodoValidation } from "./todo.validation";
import validateRequest from "../../middlewares/validateRequest";
import { TodoController } from "./todo.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(TodoValidation.createTodoZodSchema),
  TodoController.createTodo
);

router.get("/", TodoController.getTodos);

export const TodoRoutes = router;
