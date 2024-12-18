import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default Button;
