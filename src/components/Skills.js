import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="flex items-center justify-center rounded-full font-semibold
        bg-[#19405F] py-3 px-6 shadow-[#19405F] text-[#37B6EF] hover:border-dark 
        hover:text-[#E2E8F0] transition-all ease-in-out duration-700 
        hover:bg-dark cursor-pointer absolute dark:bg-[#A5A5AF] dark:text-[#015249]
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-[#E2E8F0] 
      dark:text-[#015249] md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full
     bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
     lg:bg-circularLightLg lg:bg-circularDarkLg md:bg-circularLightMd md:bg-circularDarkMd
     sm:bg-circularLightSm sm:bg-circularDarkSm"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold
        bg-[#19405F] p-8 shadow-[#19405F] text-[#37B6EF] hover:border-dark 
        hover:text-[#E2E8F0] transition-all ease-in-out duration-700 
        hover:bg-dark cursor-pointer dark:bg-[#A5A5AF] dark:text-[#015249]
        lg:p-6 md:p-4 xs:text-xs xs:p-2"
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-27vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-9vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Web Design" x="-31vw" y="12vw" />
        <Skill name="SCSS" x="-37vw" y="-4vw" />
        <Skill name="TailwindCSS" x="31vw" y="-5vw" />
        <Skill name="Sanity.io" x="0vw" y="-19vw" />
        <Skill name="Strapi" x="26vw" y="-16vw" />
        <Skill name="Canva" x="19vw" y="-11vw" />
      </div>
    </>
  );
};

export default Skills;
