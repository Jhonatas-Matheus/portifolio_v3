import { StyledCardProject } from "./styles"

export interface IProject{
    projectTitle: string
    projectDescription: string
    projectDescriptionEn: string
    projeectTechs: string[]
    projectImg: string
    projectLink: string
    solo: boolean
}
interface ICardProjectPorfolioProps{
    project: IProject
}


export const CardProjectPortfolio = ({project}: ICardProjectPorfolioProps) => {
  return <StyledCardProject>
    <h2>{project.projectTitle}</h2>
    <div className="photo-frame">
    <img src={project.projectImg} alt="" />

    </div>
  </StyledCardProject>;
};
