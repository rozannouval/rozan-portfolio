import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-light animate-spin-slow"} />
        <Link href="mailto:rozannouval@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light shadow-md border-2 border-solid border-light w-20 h-20 rounded-full text-dark font-semibold hover:bg-dark hover:text-light transition-all duration-200">Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;
