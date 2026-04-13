import { ReactNode } from "react"; 

export interface ButtonProps {
  title?: string;
  href?: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

