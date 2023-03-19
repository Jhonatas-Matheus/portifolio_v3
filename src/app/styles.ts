import styled from "styled-components";
import { motion } from "framer-motion";

// export const StyledHome = styled.div`
export const StyledHome = styled(motion.div)`
  position: relative;
  align-self: center;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min-content;
  /* height: 100%; */
  .photo-frame {
    min-height: 10rem;
    min-width: 10rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h1 {
    text-align: center;
    font-size: 1.3rem;
    @media (min-width: 768px) {
      font-size: 3rem;
      
    }
  }
  .typing {
    text-align: center;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .download-cv {
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 20px;
    text-decoration: none;
    color: var(--primary-text-color);
    transition: 0.5s;
    &:hover {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }
  .spinner {
  }
`;
