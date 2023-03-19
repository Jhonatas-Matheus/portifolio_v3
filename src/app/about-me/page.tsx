"use client";
import { StyledAboutMePage } from "./styles";
import {
  MdStore,
  MdWeb,
  MdEditDocument,
  MdManageAccounts,
} from "react-icons/md";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandFirebase,
  TbBrandDocker,
  TbBrandAngular,
} from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiFlutter,
  SiIonic,
  SiLaravel,
} from "react-icons/si";
import { Animated } from "react-animated-css";
import { useContext, useEffect, useState } from "react";
import { SectionContext } from "../../context/section_context";
import { AnimatePresence } from "framer-motion";
// import { CarouselWorksTypes } from "../carousel_works_type";


export default function AboutPage() {
  return (
    <StyledAboutMePage
      initial={{ opacity: 0, y: 0, rotateY: 90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <section className="section-about-me">
        <h2 className="title-section main">
          Sobre <span>Mim</span>
        </h2>
        <div className="profile-info">
          <p className="text-section">
            Desde de criança que sou apaixonado pelo mundo da computação e como
            sempre fui curioso por volta dos meus 18 anos comecei a estudar
            programação área pela qual me apaixonei e sigo carreira
            profissional. Sou uma pessoa comunicativa e provativa, busco sempre
            aprimorar os meus conhecimentos, vejo tudo como uma oportunidade de
            evolução e busco somar ao máximo nos ambientes no quais estou
            inserido.
          </p>
          <div className="personal-information">
            <p>
              <span>Idade</span> 24
            </p>
            <p>
              <span>Cidade</span> Mossoró,RN
            </p>
            <p>
              <span>Email</span> jmdevbr@gamil.com
            </p>
          </div>
        </div>
      </section>
      <section className="section-what-i-do">
        <h2 className="title-section">
          Oque <span>Eu Faço</span>
        </h2>
        <div className="types-of-work">
          <div className="work-type">
            <MdStore size={50} />
            <h3>Ecommerce</h3>
            <p>
              Como desenvolvedor Full-Stack, trabalho com o desenvolvimento de
              ecommerces, utilizando as mais recentes tecnologias e ferramentas
              para criar plataformas seguras, rápidas e fáceis de usar. Se
              precisa de um desenvolvedor Full-Stack para construir sua loja
              virtual, entre em contato comigo.
            </p>
          </div>
          <div className="work-type">
            <MdWeb size={50} />
            <h3>Landing Page</h3>
            <p>
              Possuo ampla experiência na criação de landing pages altamente
              eficazes que convertem visitantes em clientes. Eu utilizo as mais
              recentes tecnologias para garantir que cada página seja carregada
              rapidamente, seja totalmente responsiva e ofereça uma experiência
              excepcional para o usuário em qualquer dispositivo. Se você está
              procurando um desenvolvedor Full-Stack para criar sua landing
              page, entre em contato comigo e vamos discutir o que posso fazer
              para ajudar.
            </p>
          </div>
          <div className="work-type">
            <MdEditDocument size={50} />
            <h3>Landing Page</h3>
            <p>
              Ao longo da minha carreira como desenvolvedor também já desenvolvi
              sites com CMS (Sistema de Gerenciamento de Conteúdo), permitindo
              aos meus clientes gerenciar e atualizar seus próprios conteúdos.
              Utilizo as mais recentes tecnologias e ferramentas de CMS para
              garantir que cada site seja altamente funcional, seguro e fácil de
              usar. Minha abordagem personalizada inclui desde o design até a
              configuração de plugins e recursos específicos para atender às
              necessidades de cada cliente. Se você precisa de um site com CMS
              que seja fácil de atualizar e gerenciar, entre em contato comigo e
              vamos discutir o que posso fazer para ajudar.
            </p>
          </div>
          <div className="work-type">
            <MdManageAccounts size={50} />
            <h3>Sites de Gestão</h3>
            <p>
              Trabalho com a criação de sites para gestão de empresas.
              Utilizando as mais recentes tecnologias, crio plataformas
              personalizadas que oferecem ferramentas avançadas de gestão de
              negócios, desde a análise de dados até a automação de processos.
              Estou comprometido em fornecer soluções sob medida para ajudar as
              empresas a alcançar seus objetivos de negócios. Se você precisa de
              um site para gerenciamento de empresas, entre em contato comigo e
              vamos discutir o que posso fazer para ajudar.
            </p>
          </div>
        </div>
      </section>
      <section className="section-technologies">
        <h2 className="title-section">
          Tecnologias <span>Utilizadas</span>
        </h2>
        <div className="display-technologies">
          <div className="icon-brand">
            <h3>HTML5</h3>
            <TbBrandHtml5 size={45} />
          </div>
          <div className="icon-brand">
            <h3>CSS3</h3>
            <TbBrandCss3 size={45} />
          </div>
          <div className="icon-brand">
            <h3>JAVASCRIPT</h3>
            <TbBrandJavascript size={45} />
          </div>
          <div className="icon-brand">
            <h3>REACTJS</h3>
            <TbBrandReactNative size={45} />
          </div>
          <div className="icon-brand">
            <h3>NEXTJS</h3>
            <TbBrandNextjs size={45} />
          </div>
          <div className="icon-brand">
            <h3>TAILWINDCSS</h3>
            <TbBrandTailwind size={45} />
          </div>
          <div className="icon-brand">
            <h3>GIT</h3>
            <TbBrandGit size={45} />
          </div>
          <div className="icon-brand">
            <h3>FIREBASE</h3>
            <TbBrandFirebase size={45} />
          </div>
          <div className="icon-brand">
            <h3>DOCKER</h3>
            <TbBrandDocker size={45} />
          </div>
          <div className="icon-brand">
            <h3>ANGULAR</h3>
            <TbBrandAngular size={45} />
          </div>
          <div className="icon-brand">
            <h3>NODEJS</h3>
            <FaNodeJs size={45} />
          </div>
          <div className="icon-brand">
            <h3>POSTGRESQL</h3>
            <SiPostgresql size={45} />
          </div>
          <div className="icon-brand">
            <h3>MONGODB</h3>
            <SiMongodb size={45} />
          </div>
          <div className="icon-brand">
            <h3>PRISMA</h3>
            <SiPrisma size={45} />
          </div>
          <div className="icon-brand">
            <h3>TYPESCRIPT</h3>
            <SiTypescript size={40} />
          </div>
          <div className="icon-brand">
            <h3>NESTJS</h3>
            <SiNestjs size={45} />
          </div>
          <div className="icon-brand">
            <h3>EXPRESS</h3>
            <SiExpress size={45} />
          </div>
          <div className="icon-brand">
            <h3>FLUTTER</h3>
            <SiFlutter size={40} />
          </div>
          <div className="icon-brand">
            <h3>IONIC</h3>
            <SiIonic size={45} />
          </div>
          <div className="icon-brand">
            <h3>LARAVEL</h3>
            <SiLaravel size={45} />
          </div>
        </div>
      </section>
    </StyledAboutMePage>
  )
}
