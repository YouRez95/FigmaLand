import boardImage from "../assets/Boards.png";
import chatBotImage from "../assets/ChatBot.png";
import dashboardImage from "../assets/Dashboard.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex bg-black flex-col gap-10 items-center text-center min-h-[93vh] pt-10 overflow-hidden">
      <motion.h1
        initial={{
          scale: 0,
        }}
        transition={{
          delay: 1.5,
        }}
        animate={{
          scale: 1,
        }}
        className="text-6xl lg:text-7xl font-light lg:font-normal max-w-[600px] lg:max-w-[700px] px-5"
      >
        Work at the speed of thought.
      </motion.h1>

      <motion.p
        initial={{
          scale: 0,
        }}
        transition={{
          delay: 1.5,
        }}
        animate={{
          scale: 1,
        }}
        className="text-lg lg:text-xl px-5 max-w-[600px]"
      >
        Most calendars are designed for teams.{" "}
        <br className="block lg:hidden" /> Slate is designed for freelancers who{" "}
        <br className="block lg:hidden" /> want a simple way to plan{" "}
        <br className="block lg:hidden" /> their schedule.
      </motion.p>
      <motion.div
        initial={{
          scale: 0,
        }}
        transition={{
          delay: 1.5,
        }}
        animate={{
          scale: 1,
        }}
        className="flex flex-col gap-4 lg:flex-row"
      >
        <button className="capitalize bg-[#4452FE] py-4 px-7">
          try for free
        </button>
        <button className="border py-4 px-7 capitalize">learn more</button>
      </motion.div>

      <div className="flex-1 relative w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-b from-[#00000000] via-[#00000045] to-black " />
        <motion.img
          initial={{
            scale: 0,
          }}
          transition={{
            delay: 2,
          }}
          animate={{
            scale: 1,
          }}
          src={dashboardImage}
          alt=""
          className="w-[400px] lg:w-[600px] m-auto"
        />
        <div className="flex justify-center -mt-[140px] lg:-mt-[220px]">
          <motion.img
            initial={{
              scale: 0,
            }}
            transition={{
              delay: 2.2,
            }}
            animate={{
              scale: 1,
            }}
            src={boardImage}
            alt=""
            className="w-[400px] lg:w-[600px]"
          />
          <motion.img
            initial={{
              scale: 0,
            }}
            transition={{
              delay: 2.4,
            }}
            animate={{
              scale: 1,
            }}
            src={chatBotImage}
            alt=""
            className="w-[400px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
