import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-blue-700 dark:stroke-[#015249]">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[#37B6EF] dark:stroke-[#015249] stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-[#0F172A] dark:fill-[#77C9D4]"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-[#37B6EF] dark:stroke-[#015249] dark:fill-[#015249] stroke-1 fill-[#37B6EF] animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
