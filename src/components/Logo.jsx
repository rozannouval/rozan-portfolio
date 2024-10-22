import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-12 bg-transparent text-light border-2 border-light flex items-center justify-center rounded-se-2xl rounded-es-2xl text-xl font-bold transition-all duration-300 hover:text-dark hover:bg-light hover:border-dark "
      >
        RN
      </MotionLink>
    </div>
  );
};

export default Logo;
