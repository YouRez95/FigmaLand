import React from "react";
import Layout from "./Layout";
import gallery1phone from "../assets/gallery1phone.png";
import gallery2phone from "../assets/gallery2phone.png";
import gallery3phone from "../assets/gallery3phone.png";
import gallery4phone from "../assets/gallery4phone.png";
import gallery1des from "../assets/gallery1des.png";
import gallery2des from "../assets/gallery2des.png";
import gallery3des from "../assets/gallery3des.png";
import { motion } from "framer-motion";

export default function Gallery() {
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
        gallery
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

      <div className="grid gap-4 h-fit">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-[60vw] lg:w-auto justify-center max-w-[300px] lg:max-w-none lg:flex-row">
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
            src={gallery1phone}
            alt="gallery"
            className="rounded-lg object-cover h-full max-h-[300px]"
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
            src={gallery2phone}
            alt="gallery"
            className="rounded-lg object-cover h-full max-h-[300px]"
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
            src={gallery3phone}
            alt="gallery"
            className="rounded-lg object-cover h-full max-h-[300px]"
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
            src={gallery4phone}
            alt="gallery"
            className="rounded-lg object-cover h-full max-h-[300px]"
          />
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-4 justify-center">
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
            src={gallery1des}
            alt=""
            className="col-span-2 rounded-lg h-full object-cover max-h-[500px]"
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
            src={gallery2des}
            alt=""
            className="rounded-lg h-full object-cover max-h-[500px]"
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
            src={gallery3des}
            alt=""
            className="col-span-2 rounded-lg h-full object-cover max-h-[500px]"
          />
        </div>
      </div>

      <button className="mt-3 border py-3 px-9">See more</button>
    </Layout>
  );
}
