import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPortifolioSection = styled(motion.div)`
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
  .filter-portfolio {
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 1rem;
    @media (min-width: 1024px){

      justify-content: center;
    }
    button {
      min-width: 50%;
      @media (min-width: 1024px){
        min-width: 0;
        width: auto;
      }
      /* flex-basis: 100%; */
      color: #fff;
      border-radius: 10px;
      padding: 1rem;
      border: 1px solid #fff;
      background-color: transparent;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background-color: var(--primary-color);
      }
    }
  }
  .display-projects{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
