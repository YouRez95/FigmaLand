import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      transition={{
        delay: 0.2,
      }}
      animate={{
        scale: 1,
      }}
      className="my-60 text-center text-4xl uppercase"
    >
      About Page
    </motion.div>
  );
}
