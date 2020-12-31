import React from "react";
import { ButtonContainer } from "./Styles";

export interface ButtonProps {
  children: any;
}

const Button = ({ children }: ButtonProps) => (
  <ButtonContainer>{children}</ButtonContainer>
);

export default Button;
