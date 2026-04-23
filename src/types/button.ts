import { ReactNode } from "react"; 

export interface ButtonProps {
  title?: string;
  href?: string;
  icon?: ReactNode;
  bgColor?: string;
  colorText?: string;
  onClick?: () => void;
}

