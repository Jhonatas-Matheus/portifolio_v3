"use client";
import {
  SectionContext,
  SectionContextProvider,
} from "@/context/section_context";
import { StyledDashboard } from "./styles";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import {
  MdHome,
  MdPerson,
  MdFolder,
  MdContactMail,
  MdDescription,
} from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: IDashboardProps) => {
  const { currentSection } = useContext(SectionContext);
  return (
    <StyledDashboard>
      <aside>
        <div className="profile">
          <div className="photo-frame">
            <img src="./assets/profile.jpeg" alt="" />
          </div>
          <h1>Jhonatas Matheus</h1>
          <h2>Desenvolvedor Full-Stack</h2>
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
        </div>

        <nav className="control-panel-desktop">
          <ul>
            <li>
              <Link
                href="/"
                className={currentSection === "home" ? "active" : ""}
              >
                <MdHome size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="/about-me"
                className={currentSection === "aboutMe" ? "active" : ""}
              >
                <MdPerson size={30} />
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <MdFolder
                  size={30}
                  className={currentSection === "portfolio" ? "active" : ""}
                />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <MdContactMail
                  size={30}
                  className={currentSection === "contact" ? "active" : ""}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className={currentSection === "resume" ? "active" : ""}
              >
                <MdDescription size={30} />
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="container">{children}</div>
    </StyledDashboard>
  );
};
