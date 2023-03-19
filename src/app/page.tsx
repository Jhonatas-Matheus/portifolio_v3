"use client";
import { SectionContext } from "@/context/section_context";
import { useContext } from "react";
import { StyledHome } from "./styles";
import { AnimatePresence } from "framer-motion";
import Typist from "react-typist";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
export default function HomePage() {
  // Router.events.on(()=>{
  //   return(<Loading/>)
  // })
  return (
    <StyledHome
    initial={{ opacity: 0, y: 50, rotateY: 90 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    exit={{
      opacity: 0,
      y: -50,
      rotateY: 180,
      transition: { duration: 0.5 },
    }}
    transition={{ duration: 0.5 }}
  >
    <div className="photo-frame">
      <img src="./assets/profile.jpeg" alt="" />
    </div>
    <h1>Jhonatas Matheus</h1>
    <Typist
      className="typing"
      cursor={{
        hideWhenDone: true,
        hideWhenDoneDelay: 1000,
        show: true,
        blink: true,
        element: "",
      }}
    >
      Desenvolvedor Full-Stack
    </Typist>
    <ul className="social-links">
            <li>
              <Link href="https://www.linkedin.com/in/jhonatasalves/" target="_blank">
                <SlSocialLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Jhonatas-Matheus" target="_blank">
                <SiGithub />
              </Link>
            </li>
          </ul>
          <Link className="download-cv" download={true} href="Currículo_Jhonatas_Matheus.pdf" target='_blank'>
            Currículo
          </Link>
          
  </StyledHome>
  );
}
