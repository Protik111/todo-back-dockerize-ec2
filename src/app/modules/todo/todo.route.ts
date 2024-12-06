import { Router } from "express";
import { TodoValidation } from "./todo.validation";
import validateRequest from "../../middlewares/validateRequest";
import { TodoController } from "./todo.controller";

const router = Router();

router.post(
  "/",
  validateRequest(TodoValidation.createTodoZodSchema),
  TodoController.createTodo
);

router.get("/", TodoController.getTodos);

// router.put("/id");

export const TodoRoutes = router;
