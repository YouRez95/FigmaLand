import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      transition={{
        delay: 0.3,
      }}
      animate={{
        scale: 1,
      }}
      className="my-60 text-center text-4xl uppercase"
    >
      Login Page
    </motion.div>
  );
}
