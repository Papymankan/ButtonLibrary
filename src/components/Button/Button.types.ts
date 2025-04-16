import { ButtonHTMLAttributes } from "react";

export type buttonVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "success";
export type buttonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type buttonBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  size?: buttonSize;
  radius?: buttonBorderRadius;
}
