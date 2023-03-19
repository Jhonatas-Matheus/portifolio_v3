"use client";
import { StyledNavMenu } from "./styles";
import {
  MdHome,
  MdPerson,
  MdFolder,
  MdContactMail,
  MdDescription,
} from "react-icons/md";
import { MouseEvent, useContext } from "react";
import { SectionContext, sections } from "@/context/section_context";
import { useRouter } from "next/navigation";
export const NavMenu = () => {
  const { currentSection } = useContext(SectionContext);
  const router = useRouter();
  return (
    <StyledNavMenu>
      <div className="btn-container">
        <button
          className={`btn-control-page ${
            currentSection === "aboutMe" ? "active" : ""
          }`}
          id="aboutMe"
          onClick={(props: MouseEvent) => {
            router.push("about-me");
          }}
        >
          <MdPerson size={40} />
        </button>
        <p>Sobre mim</p>
      </div>
      <div className="btn-container">
        <button
          className={`btn-control-page ${
            currentSection === "resume" ? "active" : ""
          }`}
          id="resume"
          onClick={()=> router.push("resume")}
        >
          <MdDescription size={40} />
        </button>
        <p>Histórico</p>
      </div>
      <div className="btn-container">
        <button
          className={`btn-control-page btn-home ${
            currentSection === "home" ? "active" : ""
          }`}
          id="home"
          onClick={(props) => {
            router.push("/");
          }}
        >
          <MdHome size={40} />
        </button>
        <p>Inicio</p>
      </div>
      <div className="btn-container">
        <button
          className={`btn-control-page ${
            currentSection === "portfolio" ? "active" : ""
          }`}
          id="portfolio"
          onClick={()=> router.push('portfolio')}
        >
          <MdFolder size={40} />
        </button>
        <p>Portifólio</p>
      </div>
      <div className="btn-container">
        <button
          className={`btn-control-page ${
            currentSection === "contact" ? "active" : ""
          }`}
          id="contact"
          onClick={()=> router.push('contact')}
        >
          <MdContactMail size={40} />
        </button>
        <p>Contato</p>
      </div>
    </StyledNavMenu>
  );
};
