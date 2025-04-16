import React from "react";
import { ButtonProps } from "./Button.types.ts";
import "../../index.css";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  radius = "md",
  className = "",
  children,
  ...attributes
}) => {

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-red-500 text-white hover:bg-green-600",
  };

  const sizeClasses = {
    xs: "py-1 px-2 text-xs",
    sm: "py-2 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-5 text-lg",
    xl: "py-4 px-6 text-xl",
  };

  return (
    <button
      className={clsx(
        variantClasses[variant],
        sizeClasses[size],
        `rounded-${radius}`,
        className
      )}
      {...attributes}
    >
      {children}
    </button>
  );
};
