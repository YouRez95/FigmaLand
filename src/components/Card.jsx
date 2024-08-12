import cardImage from "../assets/figmaLandHome.png";
import cardImageLarge from "../assets/LineChart 1.png";
import { motion } from "framer-motion";

export default function Card() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          type: "tween",
          bounce: 0.4,
        },
      }}
      viewport={{ once: true, amount: 0.8 }}
      className="bg-[#343434] relative overflow-hidden lg:rounded-lg lg:max-w-[1000px] py-16 flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-20 md:mx-3 lg:m-auto"
    >
      <div className="grid gap-6 items-start ml-0 lg:ml-10">
        <h3 className="max-w-64 lg:max-w-80 text-center text-4xl font-thin">
          OpenType features and Variable fonts
        </h3>
        <button className="bg-[#4452FE] w-fit m-auto lg:m-0 text-white py-2 px-9 capitalize">
          Try for free
        </button>
      </div>

      <div className="max-w-[500px] lg:hidden">
        <img src={cardImage} alt="figmaland home page" />
      </div>
      <div className="hidden lg:flex absolute right-0 top-2 max-w-[500px]">
        <img src={cardImageLarge} alt="" />
      </div>
    </motion.div>
  );
}
