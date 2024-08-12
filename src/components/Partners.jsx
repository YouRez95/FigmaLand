import React from "react";
import Layout from "./Layout";
import airbnb from "../assets/airbnb-1.svg";
import android from "../assets/android-6.svg";
import apiary from "../assets/apiary.svg";
import ibm from "../assets/ibm.svg";
import microsoft from "../assets/microsoft-5.svg";
import burokommunikation from "../assets/burokommunikation-und-burogestaltung.svg";
import { motion } from "framer-motion";

export default function Partners() {
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
        partners
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

      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-7 items-center place-items-center">
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={airbnb}
          alt="airbnb logo"
          className="max-w-20"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.1,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={android}
          alt="android logo"
          className="max-w-20"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.2,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={apiary}
          alt="apiary logo"
          className="max-w-20"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={microsoft}
          alt="microsoft logo"
          className="max-w-20"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.4,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={ibm}
          alt="ibm logo"
          className="max-w-20"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          src={burokommunikation}
          alt="burokommunikation logo"
          className="max-w-20"
        />
      </div>

      <button className="mt-3 border py-3 px-9">All Partners</button>
    </Layout>
  );
}
