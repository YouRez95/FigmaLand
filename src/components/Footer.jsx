import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-black mt-28">
      <div className=" py-16 px-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] m-auto">
        <motion.div
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
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-9"
        >
          <h4 className="">Fingertipe</h4>
          <ul className="font-thin grid gap-2">
            <li>Home</li>
            <li>Examples</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </motion.div>
        <motion.div
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
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-9"
        >
          <h4>Ressources</h4>
          <ul className="font-thin grid gap-2">
            <li>Home</li>
            <li>Examples</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </motion.div>
        <motion.div
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
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-9"
        >
          <h4>About</h4>
          <ul className="font-thin grid gap-2">
            <li>Home</li>
            <li>Examples</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.6,
              type: "tween",
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-start h-fit gap-5"
        >
          <span className="flex gap-2 items-center">
            <IoLocationOutline className="w-6 h-6" />
            <p className="text-sm">7480 Casablanca Oulfa, Morocco</p>
          </span>
          <span className="flex gap-2 items-center">
            <MdOutlinePhoneAndroid className="w-6 h-6" />
            <p className="text-sm">+212 7 04 37 98 14</p>
          </span>
          <span className="flex gap-5 items-center">
            <FaTwitter className="w-6 h-6" />
            <FaFacebookSquare className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
