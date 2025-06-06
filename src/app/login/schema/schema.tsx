import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().trim().min(1, { message: 'Campo de e-mail obrigatório' }).email({ message: 'E-mail inválido' }),
  password: z.string().trim().min(6, { message: 'Senha muito curta' }),
});