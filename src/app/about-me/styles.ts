import styled from "styled-components";
import { motion } from "framer-motion";
interface IStyledAboutMeSection {
  valueOfI: number;
}

/* export const StyledAboutMeSection = styled.div` */
export const StyledAboutMePage = styled(motion.div)`
  width: 100%;
  height: min-content;
  .title-section {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    span {
      color: var(--primary-color);
    }
  }
  .main{
    font-size: 2rem;
    margin-top: 0;
  }
  .profile-info{
    display: flex;
    flex-direction: column;
    @media (min-width:1024px){
      justify-content: space-between;
      flex-direction: row;

    }
  }
  .text-section {
    font-size: .7rem;
    line-height: 200%;
    margin-bottom: 2rem;

    @media (min-width:1024px){
      flex-basis: 60%;

    }
  }
  .personal-information {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 1rem;
    p{
      font-size: .7rem;
    }
    @media (min-width:1024px){
      flex-basis: 35%;
    }
    span {
      font-weight: bold;
      color: var(--primary-color);
    }
  }
  .types-of-work {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px){
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .work-type {
    line-height: 150%;
    p{
      font-size: .7rem;
    }
    @media (min-width: 1024px){
     flex-basis: 45%;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    svg {
      color: var(--primary-color);
    }
  }
  .display-technologies{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .icon-brand{
      h3{
        font-weight: 400;
        font-size: .8rem;
        margin-bottom: .5rem;
      }
      text-align: center;
      flex-basis: 33.3%;
      margin-bottom: 1rem;
      svg{
        border-radius: 50%;

        transition: .5s;
      }
      &:hover{
        svg{
          box-shadow: 0px 0px 34px 5px #AE7B18;
          border-radius: 50%;
        }
      }
    }
  }
`;
