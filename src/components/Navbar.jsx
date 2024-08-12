import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const hideMenu = (e) => {
    if (e.target.localName === "a") {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{
          y: -100,
        }}
        transition={{
          delay: 1,
        }}
        animate={{
          y: 0,
        }}
        className="flex m-auto items-center justify-between container px-4 pb-4 mt-4"
      >
        <Link to={"/"}>
          <img src={logo} alt="Figma Land Logo" />
        </Link>

        <ul className="hidden lg:flex gap-7 xl:gap-10 2xl:gap-12 font-medium">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-7">
          <button className="text-xl">
            <Link to={"/login"} className="py-2 px-5 border">
              Login
            </Link>
          </button>

          <div
            className="cursor-pointer block lg:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <BiMenuAltRight className="w-10 h-10" />
          </div>
        </div>
      </motion.header>
      <nav
        className={`fixed z-50 block lg:hidden text-black bg-white rounded-r-md ease-in-out top-0 ${
          openMenu
            ? "-left-0 transition-all  duration-300"
            : "-left-[150%] transition-all duration-150"
        } w-[100vw] h-[100vh]`}
      >
        <div
          className="absolute text-xl right-5 top-6"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose className="w-10 h-10 cursor-pointer" />
        </div>

        <img
          src={logo}
          alt="Figma Land Logo"
          className="bg-black my-20 m-auto"
        />

        <ul
          className="flex flex-col gap-10 items-center h-full"
          onClick={hideMenu}
        >
          <li className="text-2xl font-medium w-full border">
            <Link to="/" className=" block text-center p-3 hover:bg-[#f2f2f2]">
              Home
            </Link>
          </li>
          <li className="text-2xl font-medium w-full border">
            <Link
              to="/?product"
              className=" block text-center p-3 hover:bg-[#f2f2f2]"
            >
              Product
            </Link>
          </li>
          <li className="text-2xl font-medium w-full border">
            <Link
              to="/?about"
              className=" block text-center p-3 hover:bg-[#f2f2f2]"
            >
              About
            </Link>
          </li>
          <li className="text-2xl font-medium w-full border">
            <Link
              to="/?contact"
              className=" block text-center p-3 hover:bg-[#f2f2f2]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
