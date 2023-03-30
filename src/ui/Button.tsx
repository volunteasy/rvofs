import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  rightIcon?: () => React.ReactNode;
}
export default function Button({
  children,
  className,
  rightIcon,
}: ButtonProps) {
  return (
    <button
      className={`rounded-[10px] px-3 py-[10px] flex gap-2 items-center justify-center  text-white cursor-pointer ${className}`}
    >
      {children}
      {rightIcon && rightIcon()}
    </button>
  );
}

// borderRadius: 10,
// paddingHorizontal: 13,
// justifyContent: "center",
// alignItems: "center",
// paddingVertical: 10,
