// "use client";
import styled from "styled-components";

export const StyledNavMenu = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--secundary-bg-color);
  width: 100%;
  height: 4rem;
  bottom: 0;
  left: 0;
  @media (min-width: 1024px) {
    display: none;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 20%;
    height: 90%;
    p {
      font-size: 0.7rem;
      color: var(--primary-font-color);
    }
  }
  .btn-control-page {
    width: 2.7rem;
    height: 2.7rem;
    border: none;
    background-color: transparent;
    svg {
      transition: .5s;
      color: var(--primary-font-color);
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }
  .btn-home {
    width: 2.7rem;
    height: 2.7rem;
  }
  .active{
    svg{
      color: #000
    }
  }
`;
