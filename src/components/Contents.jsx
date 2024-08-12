import React from "react";
import Layout from "./Layout";
import content1 from "../assets/content1.png";
import content2 from "../assets/content2.png";
import { motion } from "framer-motion";

export default function Contents() {
  const framerX = window.matchMedia("(max-width: 1700px)").matches;

  return (
    <Layout>
      <motion.h2
        initial={{
          x: framerX ? -50 : -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-5xl uppercase"
      >
        contents
      </motion.h2>
      <motion.p
        initial={{
          x: framerX ? -50 : -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-light text-center max-w-[250px] lg:max-w-[440px]"
      >
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </motion.p>

      <div className="flex flex-col gap-10 lg:flex-row">
        <motion.div
          initial={{
            x: framerX ? -50 : -500,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="bg-white px-7 py-10 rounded-lg  text-[#181818] w-[90vw] max-w-[350px] flex flex-col items-center gap-10"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <h3 className="font-medium">Work</h3>
            <p className="text-[#5C5C5C] font-light">
              Ever wondered if you're too reliant <br /> on a client for work?
              Slate helps you identify.
            </p>
          </div>

          <button className="bg-[#4452FE] text-white py-2 px-4">Sign Up</button>

          <div className="relative max-w-[80%] sm:max-w-[90%] w-full min-h-[160px] sm:min-h-[160px]  bg-black rounded-md outline-2 border-[3px] border-[#9FA2A5]">
            <img
              src={content1}
              alt=""
              className="absolute w-[93%] h-[93%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            />
            <div className="w-[110%] h-[9px] bg-[#D8D8D8] z-10 absolute -bottom-2 right-[50%] translate-x-[50%] border-b-4 border-[#9FA2A5] rounded-b-md" />
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: framerX ? 50 : 500,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="bg-white px-7 pt-10 rounded-lg  text-[#181818] w-[90vw] max-w-[350px] flex flex-col items-center gap-10"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <h3 className="font-medium max-w-[100px] lg:max-w-none">
              Design with real data
            </h3>
            <p className="text-[#5C5C5C] font-light">
              Ever wondered if you're too reliant <br /> on a client for work?
              Slate helps you identify.
            </p>
          </div>

          <button className="bg-[#4452FE] text-white py-2 px-4 capitalize">
            Try for free
          </button>

          <div className="-mt-10">
            <img src={content2} alt="" className="" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
