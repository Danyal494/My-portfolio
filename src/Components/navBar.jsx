import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1 , x:0}} transition={{delay:0.5, duration:1}} 
      className="Snav mx-2 max-xl:hidden  list-none  shadow-xl rounded-lg
     "
    >
      <li className="border-2 border-slate-200   rounded-lg m-3 p-1">
        <Link to="/" className="about">
          <Icon
            icon="material-symbols:person"
            className="m-1"
            color="white"
            width={"30px"}
          />
        </Link>
      </li>
      <li className="border-2 border-slate-200 rounded-lg m-3 p-1">
        <Link to="/resume" className="">
          <Icon
            icon="ph:read-cv-logo-fill"
            className="m-1"
            color="white"
            width={"30px"}
          />
        </Link>
      </li>
      <li className="border-2 border-slate-200  rounded-lg m-3 p-1">
        <Link to="/projects" className="">
          <Icon
            icon="ic:outline-work"
            className="m-1"
            color="white"
            width={"30px"}
          />
        </Link>
      </li>
      <li className="border-2 border-slate-200  rounded-lg m-3 p-1">
        {" "}
        <Link to="/contact" className="">
          <Icon
            className=" m-1"
            icon="teenyicons:contact-solid"
            color="white"
            width={"30px"}
          />
        </Link>
      </li>
    </motion.div>
  );
};

export default Navbar;
