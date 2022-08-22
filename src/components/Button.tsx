import React from "react";
import styled, { css } from "styled-components";
import { IButtonProps } from "../types/Button.types";
import tw from "twin.macro";

const Container = styled.button<IButtonProps>`
  ${tw`flex items-center justify-center`};
  gap: 0.25rem;
  background: ${(p) => p.background};
  padding: 0.875rem 1.75rem;

  margin-top: ${(p) => p.marginTop}rem;

  border: none;
  outline: none;
  border-radius: 12px;
  cursor: pointer;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;

  color: ${(p) => p.color};

  ${(p) =>
    p.disabled &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;

function Button({
  text,
  icon,
  background = "#000",
  color = "#fff",
  marginTop = 0,
  disabled,
  onClick,
  ...rest
}: IButtonProps) {
  return (
    <Container
      background={background}
      marginTop={marginTop}
      color={color}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && icon}
      {text}
    </Container>
  );
}

export default Button;
