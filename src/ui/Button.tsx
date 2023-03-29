import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "secondary";
}
export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-[10px] px-3 py-[10px] items-center justify-center bg-primary text-white cursor-pointer ">
      {children}
    </button>
  );
}

// borderRadius: 10,
// paddingHorizontal: 13,
// justifyContent: "center",
// alignItems: "center",
// paddingVertical: 10,
