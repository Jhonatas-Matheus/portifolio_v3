"use client";
import { StyledPortifolioSection } from "./styles";
import projects from "../../db/projects.json";
import { CardProjectPortfolio } from "@/components/card_project_portfolio";

export default function PortifolioPage() {
  return (
    <StyledPortifolioSection
      initial={{ opacity: 0, y: 0, rotateY: 90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title-section main">
        Meu <span>Portfólio</span>
      </h2>
      <div className="filter-portfolio">
        <button>ReactJS</button>
        <button>Angular</button>
        <button>Express</button>
        <button>NestJS</button>
        <button>SpringBoot</button>
      </div>

      <div className="display-projects">
        {projects.map((project: any) => (
          <CardProjectPortfolio project={project} key={project.projectTitle} />
        ))}
      </div>
    </StyledPortifolioSection>
  );
}
