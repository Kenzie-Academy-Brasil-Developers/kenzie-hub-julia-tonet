import { z } from "zod";

export const formRegisterSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail precisa ser válido"),
  password: z
    .string()
    .min(8, "É necessário ter, pelo menos, 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
});
