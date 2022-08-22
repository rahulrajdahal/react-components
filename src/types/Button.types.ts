import React, { MouseEventHandler } from "react";

export interface IButtonProps {
  text?: string;
  background?: string;
  marginTop?: number;
  icon?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
