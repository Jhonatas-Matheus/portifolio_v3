"use client";

import { StyledContactSection } from "./styles";
import { MdLocationPin } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object({
  name: yup.string().trim().required("O campo nome é obrigatório"),
  email: yup
    .string().trim()
    .email("O campo deve conter um e-mail válido")
    .required("O campo email é obrigatório"),
  subject: yup.string().trim(),
  message: yup.string().trim().required("O campo é obrigatório"),
});

type FormData = yup.InferType<typeof formSchema>;

interface ISendMessageParams {
  email: string;
  message: string;
  name: string;
  subject?: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const handleOnSubmit = (data: FormData) => {
    sendMessage({...data})
    console.log(data);
  };
  const sendMessage = (payload: ISendMessageParams) => {
    const text = encodeURI(
      `*Gostaria de marcar uma reunião: \n *Nome:* ${payload.name} \n *Assunto:* ${payload.subject} \n *Mensagem*: ${payload.message} \n *Email:* ${payload.email}`
    );
    window.open(
      "https://api.whatsapp.com/send?phone=" +
        "+5584999336921" +
        "&text=" +
        text,
      "_blank"
    );
  };
  return (
    <StyledContactSection
      initial={{ opacity: 0, y: 0, rotateY: 90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title-section main">
        Fale <span>Comigo</span>
      </h2>
      <div className="display-content">
        <div className="left-side">
          <div className="icon-container">
            <MdLocationPin size={40} />
            <h2>Mossoró</h2>
          </div>
          <div className="icon-container">
            <MdPhone size={40} />
            <h2>(84) 9 9933-6921</h2>
          </div>
          <div className="icon-container">
            <MdMail size={40} />
            <h2>jmdevbr@gmail.com</h2>
          </div>
          <div className="icon-container">
            <MdCheckCircle size={40} />
            <h2>Disponível para Freelancer</h2>
          </div>
        </div>
        <div className="right-side">
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="form-inputs">
              <input
                type="text"
                placeholder="Nome Completo"
                {...register("name")}
              />
              {errors.name && (
                <p className="error-validation">{errors.name.message}</p>
              )}
              <input type="text" placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className="error-validation">{errors.email.message}</p>
              )}
              <input
                type="text"
                placeholder="Assunto"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="error-validation">{errors.subject.message}</p>
              )}
              <button type="submit">Enviar</button>
            </div>
            <div className="container-msg">
              <textarea
                id=""
                cols={30}
                rows={10}
                placeholder="Mensagem"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="error-validation">{errors.message.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </StyledContactSection>
  );
}
