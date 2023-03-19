// "use client";
import styled from "styled-components";
export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* max-height: 100vh; */
  box-sizing: border-box;
  .bg-container {
    position: relative;
    width: 100%;
    height: 100%;
    /* max-height: 100vh; */
    background: url("./assets/bg-codding.webp");
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(2px);
  }
  .content {
    position: relative;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    /* max-height: 100vh; */
    overflow-y: auto;
    overflow-x: hidden;
    /* padding-bottom: 4rem; */
    @media (min-width: 1024px) {
      /* height: calc(100% - 4rem); */
      padding: 10vh 100px;
    }
  }
`;
