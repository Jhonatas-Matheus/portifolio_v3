import { motion } from "framer-motion";
import styled from "styled-components";


export const StyledResumeSection = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
padding: 60px 0;
@media (min-width: 1024px){
position: static;
padding: 0;
.title-section{
  padding: 0;
}
}
.title-section {
    font-size: 1.5rem;
    padding: 0 60px;
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
width: 100%;
height: min-content;
.filter-timeline{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    @media (min-width: 1024px){
        margin-top: 0
    }
    button{
        color: #fff;
        border-radius: 10px;
        padding: 1rem;
        border: 1px solid #fff;
        background-color: transparent;
        cursor: pointer;
        transition: .5s;
        &:hover{
            background-color: var(--primary-color);
        }
    }
    .active{
        color: #fff !important;
        background-color: var(--primary-color);
    }
}
`