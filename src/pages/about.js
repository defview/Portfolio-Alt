import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilepic from "../../public/images/profile/workpiece1.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>FolaAlex | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-[#E2E8F0] mb-16 dark:!text-[#015249]
            lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
            md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase text-[#E2E8F0] dark:text-[#015249]">
                Biography
              </h2>
              <p className="font-medium text-lg dark:text-[#015249]">
                Hi, I'm Folafemi Alexander, a Front end Engineer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With over 3 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
              </p>
              <p className="my-4 font-medium text-lg dark:text-[#015249]">
                {" "}
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium text-lg dark:text-[#015249]">
                {" "}
                When working on a particular project, I bring my commitment to
                design excellence and user-centered thinking to every project I
                work on. I look forward to the opportunity to bring my skills
                and passion to your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-br-2xl border-2 border-solid xl:col-span-4 md:order-1 md:col-span-8
            p-8 shadow-lg dark:shadow-none border-transparent dark:border-none bg-[#0F172A] dark:bg-gradient-to-r from-[#77C9D4] to-[#57BC90]"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]
                bg-[#37B6EF] dark:bg-[#015249] "
              />
              <Image
                src={profilepic}
                alt="folaalex"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-[#E2E8F0] dark:text-[#015249] md:text-6xl 
                sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-[#015249] xl:text-center 
                md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-[#E2E8F0] dark:text-[#015249] 
                md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={9} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-[#015249]
                md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-[#E2E8F0] 
                dark:text-[#015249] md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-[#015249]
                md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
