import React from "react";

interface GridProps {
  children?: React.ReactNode;
}
export default function Grid({ children }: GridProps) {
  return <div className="w-full px-2 max-w-screen-xl m-auto">{children}</div>;
}
