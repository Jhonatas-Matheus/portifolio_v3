"use client";
import { StyledContainer } from "./style";

type contaierProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: contaierProps) => {
  return (
    <StyledContainer>
      <div className="bg-container"></div>
      <div className="content">{children}</div>
    </StyledContainer>
  );
};
