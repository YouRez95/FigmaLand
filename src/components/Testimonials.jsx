import React from "react";
import Layout from "./Layout";
import { TESTIMONIALS } from "../data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
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
        testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1 * index,
                type: "tween",
                bounce: 0.4,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            key={testimonial.name}
            className="border border-[#565656] max-w-80 lg:max-w-96 p-10 flex flex-col gap-5 rounded-lg"
          >
            <div className="flex items-center gap-5">
              <img src={testimonial.image} alt="" className="w-14" />
              <span className="font-normal max-w-28 capitalize">
                {testimonial.name}
              </span>
            </div>
            <p className="font-light">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
