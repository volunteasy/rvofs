import React, { ButtonHTMLAttributes } from "react";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  rightIcon?: () => React.ReactNode;
}
export default function ButtonText({ children, rightIcon }: ButtonTextProps) {
  return (
    <button className=" text-primary cursor-pointer flex gap-2 items-center hover:brightness-75 transition-all duration-500">
      {children} {rightIcon && rightIcon()}
    </button>
  );
}
