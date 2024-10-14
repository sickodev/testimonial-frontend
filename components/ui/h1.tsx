import React from "react";

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-tight lg:text-8xl">
      {children}
    </div>
  );
};

export default H1;
