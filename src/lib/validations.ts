import { z } from "zod";

export const contactFormSchema = z.object({
  nome: z
    .string()
    .min(1, { message: "Nome completo é obrigatório" })
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  telefone: z
    .string()
    .min(1, { message: "Telefone é obrigatório" })
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: "Telefone inválido. Use o formato (99) 99999-9999" }),
  cpf: z
    .string()
    .min(1, { message: "CPF é obrigatório" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido. Use o formato 999.999.999-99" }),
  endereco: z
    .string()
    .min(1, { message: "Endereço é obrigatório" })
    .min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  cep: z
    .string()
    .min(1, { message: "CEP é obrigatório" })
    .regex(/^\d{5}-\d{3}$/, { message: "CEP inválido. Use o formato 99999-999" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
