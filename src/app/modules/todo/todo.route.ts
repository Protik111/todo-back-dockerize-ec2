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

router.patch(
  "/:id",
  validateRequest(TodoValidation.updateTodoZodSchema),

  TodoController.editTodo
);

router.delete("/:id", TodoController.deleteTodo);

export const TodoRoutes = router;
