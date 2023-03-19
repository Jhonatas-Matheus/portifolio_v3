"use client"
import { StyledLoading } from "./styles"

export const Loading = () => {
  return (
    <StyledLoading>

        <img src="./assets/loading.svg" alt="spinner de carregamento" />
        <p>Carregando...</p>
      
    </StyledLoading>
  );
};
