import { z } from "zod";

export const loginFormValueSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
});

export type LoginFormValue = z.infer<typeof loginFormValueSchema>;
