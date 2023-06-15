import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center sm:right-0
    overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className={"fill-[#E2E8F0] animate-spin-slow"} />

        <Link
          href="mailto:folafemialec@gmail.com"
          className="flex items-center justify-center font-semibold text-[#37B6EF]
        absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2
        shadow-md bg-[#19405F] border border-solid border-[#19405F]
        rounded-full w-[73px] h-[73px] hover:border-dark hover:text-[#E2E8F0]
        transition-all ease-in-out duration-700 hover:bg-dark dark:bg-[#A5A5AF] 
        dark:text-[#015249] dark:border-none md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
