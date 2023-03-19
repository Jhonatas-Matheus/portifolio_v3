import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContactSection = styled(motion.div)`
  width: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  /* min-height: min-content; */
  height: min-content;
  @media (min-width:768px){
    height: 100%;
  }
  .display-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .left-side {
    display: flex;
    flex-direction: column;
    height: 40rem;
    /* flex-basis: 500%; */
    @media (min-width: 768px) {
      height: auto;
      flex-basis: 30%;
    }
    gap: 1rem;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(51, 51, 51);
    flex-basis: 25%;
    width: 100%;
    h2 {
      font-size: 1rem;
    }
    svg {
      color: var(--primary-color);
    }
  }
  .right-side {
    flex-basis: 70%;
    /* background-color: blue; */
    padding: 1rem;
    display: flex;
    align-self: center;
    justify-content: center;
    /* height: 70%; */
    height: min-content;
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      @media (min-width:768px){
        flex-direction: row;
      }
      gap: 1rem;
    }
    .form-inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      input {
        padding: 1rem;
        background-color: transparent;
        border: 2px solid rgb(154,154,154) ;
        border-radius: 10px;
        color:rgb(154,154,154);
        &::placeholder{
          color:rgb(154,154,154);
        }
        &:focus{
          outline: none;
        }
      }
      button {
        background-color: transparent;
        height: min-content;
        padding: 1rem;
        border: 2px solid rgb(154,154,154) ;
        border-radius: 10px;
        text-align: center;
        /* line-height: -500%; */
        color: #fff;
        font-weight: 700;
        transition: .5s;
        &:hover{
          background-color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
      }
    }
    textarea{
        background-color: transparent;
        border: 2px solid rgb(154,154,154) ;
        border-radius: 10px;
        padding: 1rem;
        color: rgb(154,154,154);
        &:focus{
          outline: none;
        }
      }
  }
  .title-section {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    span {
      color: var(--primary-color);
    }
  }
  .main {
    font-size: 2rem;
    margin-top: 0;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .container-msg{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .error-validation{
    color: red;
  }
`;
