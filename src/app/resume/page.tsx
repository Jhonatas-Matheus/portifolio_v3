"use client";
import { StyledResumeSection } from "./styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiOutlineCode } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSchool } from "react-icons/md";

export default function ResumePage() {
  const [timeline, setTimeline] = useState<"professional" | "academic">(
    "professional"
  );
  return (
    <StyledResumeSection
      initial={{ opacity: 0, y: 0, rotateY: 90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title-section main">
        Minha <span>Trajetória</span>
      </h2>
      <div className="filter-timeline">
        <button
          onClick={() => setTimeline("professional")}
          className={timeline === "professional" ? "active" : ""}
        >
          Profissional
        </button>
        <button
          onClick={() => setTimeline("academic")}
          className={timeline === "academic" ? "active" : ""}
        >
          Acadêmico
        </button>
      </div>
      {/* Timeline de professional */}
      {timeline === "professional" && (
        <motion.div
          initial={{ opacity: 0, y: 0, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          exit={{ opacity: 0, y: 0, rotateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="jan de 2023 - atual"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<HiOutlineCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Desenvolvedor Full-Stack (Freelancer)
              </h3>
              <h4>Paga Pix</h4>
              <h4 className="vertical-timeline-element-subtitle">Natal, RN</h4>
              <p>
                Desenvolvimento de aplicação web utilizando o Framework Angular
                2+ (NgRx - Typescript - Sass);
              </p>
              <p>Configuração de VPS e deploy de aplicação;</p>
              <p>
                Adaptação e correção de bugs de back-end utilizando NodeJS
                (Webhooks, SocketIO, Telegram API).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work box-timeline"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="dez de 2022 - fev de 2023"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<HiOutlineCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Desenvolvedor Full-Stack (Freelancer)
              </h3>
              <h4>Orismar Viagens e encomendas</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Mossoró, RN
              </h4>
              <p>
                Desenvolvimento de aplicação web utilizando o framework ReactJS
                (Context-API - Typescript- Styled Components - Framer Motion).
              </p>
              <p>Configuração de VPS e deploy de aplicação;</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work box-timeline"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="jul de 2022 - set de 2022"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<HiOutlineCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Monitor de ensino (Temporário)
              </h3>
              <h4>Kenzie Academy Brasil</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Curitiba, PR
              </h4>
              <p>
                Supervisionamento direto de alunos do curso de Developer
                Full-Stack;
              </p>
              <p>
                Correção de atividades de alunos do curso de Developer
                Full-Stack;
              </p>
              <p>
                Auxilio e code review para alunos do curso de Developer
                Full-Stack (Javascript - Typescript - ReactJS - NodeJS).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work box-timeline"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="jul de 2018 - mai de 2022"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<HiOutlineCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Técnico de manutenção de computadores e notebooks
              </h3>
              <h4>Jhontec</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Mossoró, PR
              </h4>
              <p>Manutenção preventiva de computadores e notebooks;</p>
              <p>Formatação, troca de peças(hardware) em geral</p>
              <p>Reparo de placas-mãe</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/* Timeline de Academic */}
        </motion.div>
      )}
      {timeline === "academic" && (
        <motion.div
          initial={{ opacity: 0, y: 0, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          exit={{ opacity: 0, y: 0, rotateY: 90 }}
          transition={{ duration: 0.5 }}
        >
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="mai de 2022 - mai de 2023"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Fromação Desenvolvedor Full-Stack
              </h3>
              <h4>Kenzie Academy Brasil</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Curitiba, PR
              </h4>
              <p>
                Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
                tecnologias Front End e Back End além de soft skills necessários
                para o mercado de trabalho. Entre as linguagens e tecnologias
                aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Redux,
                Python (Django e Flask) e SQL."
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="jun de 2016 - atual"
              dateClassName="date-timeline"
              iconStyle={{ background: "rgb(174, 123, 24)", color: "#fff" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Bacharelado em Ciência e Tecnologia
              </h3>
              <h4>Universiade Federal Rural do Semi-Árido (UFERSA)</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Mossoró, RN
              </h4>
              <p>
                A formação de bacharelado em ciência e tecnologia envolve uma
                ampla variedade de conhecimentos que abrangem desde a
                matemática, física e química até a programação, engenharia de
                software e ciência da computação. Os alunos podem se aprofundar
                em áreas específicas de tecnologia, como inteligência
                artificial, aprendizado de máquina, segurança da informação,
                redes de computadores e sistemas operacionais. Após a conclusão
                do bacharelado o aluno pode escolher qual engenharia quer cursar
                em seu segundo ciclo.
              </p>
              <p>
                Ao longo do curso, os estudantes adquirem habilidades na
                resolução de problemas complexos, raciocínio lógico e análise
                crítica. Eles também desenvolvem habilidades de comunicação,
                trabalho em equipe e liderança, que são cruciais no mundo
                profissional.
              </p>
              <p>
                Outros tópicos importantes incluem gestão de projetos,
                empreendedorismo, ética em tecnologia e responsabilidade social.
                Através do aprendizado prático e projetos práticos, os alunos
                são expostos a situações do mundo real e têm a oportunidade de
                aplicar suas habilidades e conhecimentos em soluções práticas.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      )}
    </StyledResumeSection>
  );
}
