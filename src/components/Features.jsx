import Layout from "./Layout";
import features1 from "../assets/features1.png";
import features2 from "../assets/features2.png";
import { IoMdRestaurant } from "react-icons/io";
import { PiAlienBold } from "react-icons/pi";
import { RiInfinityLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Features() {
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
        features
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
        className="font-light text-center max-w-[500px]"
      >
        Most calendars are designed for teams.{" "}
        <br className="block lg:hidden" /> Slate is designed for freelancers who
        want <br className="block lg:hidden" /> a simple way to plan their
        schedule.
      </motion.p>

      <div className="w-full flex flex-col gap-10 lg:flex-row justify-center">
        <div className="relative flex justify-center">
          <motion.img
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.8 }}
            src={features1}
            alt=""
            className="max-w-[60%] lg:max-w-[90%] h-[90%] my-auto w-[350px] lg:w-[600px]"
          />
          <motion.img
            initial={{
              scale: 0,
              x: framerX ? -50 : -200,
            }}
            whileInView={{
              scale: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.8 }}
            src={features2}
            alt=""
            className="absolute max-w-[40%] lg:max-w-[70%] w-[300px] -bottom-5 right-auto lg:-right-7"
          />
        </div>

        <div className="mt-10 grid gap-7">
          <div className="max-w-[60%] w-[350px] m-auto grid gap-4">
            <div className="flex items-start gap-2 font-medium max-w-[80%]">
              <IoMdRestaurant className="w-8 h-8" />
              <h3>A single source of truth</h3>
            </div>
            <p className="font-light">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="max-w-[60%] w-[350px] m-auto grid gap-4">
            <div className="flex items-start gap-2 font-medium max-w-[80%]">
              <PiAlienBold className="w-8 h-8" />
              <h3>Intuitive interface</h3>
            </div>
            <p className="font-light">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="max-w-[60%] w-[350px] m-auto grid gap-4">
            <div className="flex items-start gap-2 font-medium max-w-[80%]">
              <RiInfinityLine className="w-8 h-8" />
              <h3>Or with rules</h3>
            </div>
            <p className="font-light">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
