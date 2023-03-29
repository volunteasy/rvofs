import React, { ButtonHTMLAttributes } from "react";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: "primary" | "secondary";
}
export default function ButtonText({ children }: ButtonTextProps) {
  return <button className=" text-primary cursor-pointer ">{children}</button>;
}
