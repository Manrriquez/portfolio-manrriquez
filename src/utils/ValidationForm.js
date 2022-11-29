import { Field, Schema } from "v4f";


export default Schema(
  {
    name: Field()
      .string()
      .alphaNum({ message: "Somente caracteres alfa numéricos são permitidos!" })
      .min(8, { message: "O nome de usuário deve ter pelo menos 8 caracteres" })
      .required({ message: "Este campo é obrigatório!" }),
    email: Field()
      .string()
      .email({ message: "Insira um endereço de e-mail válido!" })
      .required({ message: "Este campo é obrigatório" }),
    subject: Field()
      .string()
      .min(8, { message: "O nome de usuário deve ter pelo menos 8 caracteres" })
      .required({ message: "Este campo é obrigatório" }),
    message: Field()
      .string()
      .min(15, { message: "O nome de usuário deve ter pelo menos 8 caracteres" })
      .required({ message: "Este campo é obrigatório" }),
  },
  { verbose: true, async: true }
);