import { z } from "zod";

const createTodoZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Todo title is required",
    }),
    time: z.string({
      required_error: "Time is required",
    }),
  }),
});

export const TodoValidation = {
  createTodoZodSchema,
};
