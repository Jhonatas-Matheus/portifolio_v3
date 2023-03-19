// "use client";
import styled from "styled-components";
import { motion } from "framer-motion";
export const StyledDashboard = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 552px;
  background-color: rgb(34, 34, 34);
  position: relative;
  @media (min-width: 1024px) {
    border-radius: 10px;
  }
  .social-links {
    display: flex;
    gap: 0.5rem;
    a{
      color: var(--primary-text-color);
      transition: .5s;
      &:hover{
        color: var(--primary-color);
      }
    }
  }
  aside {
    display: none;
    width: 40%; //Era 30% o a princípio
    background-color: rgb(68, 68, 68);
    height: 100%;
    padding: 3rem 0;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h1,h2{
        text-align: center;
      }
      h2{
        font-size: .9rem;
      }
    }
    .download-cv {
      padding: 0.5rem 1rem;
      border: 1px solid #fff;
      border-radius: 20px;
      text-decoration: none;
      color: var(--primary-text-color);
      transition: 1s;
      &:hover {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
      }
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .photo-frame {
      min-height: 10rem;
      min-width: 10rem;
      width: 10rem;
      height: 10rem;
      background-color: red;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: calc(100vh - 4rem);
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: rgb(68, 68, 68); /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      width: 2px;
      background-color: var(--primary-color);
      border: none;
    }
    @media (min-width: 1024px) {
      height: 100%;
    }
    /* 
    @media (min-width: 1024px) {
      height: calc(100vh - 10rem);
    } */
    /* height: min-content; */
    padding: 60px;
    overflow-y: auto;
  }
  .control-panel-desktop {
    display: flex;
    width: 100%;
    justify-content: center;
    /* position: absolute;
    top: 0;
    right: 0; */
    ul {
      display: flex;
      gap: 1rem;
      a {
        text-decoration: none;
        color: var(--primary-text-color);
      }
    }
  }
  .active {
    color: var(--primary-color) !important;
  }
`;
