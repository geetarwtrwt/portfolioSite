import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { right } from "../assets/framer";
function Nav() {
  return (
    <>
      <header className="h-full  fixed top-0  right-[30px] z-50 translate-y-[0%]">
        <motion.nav
          initial="offscreen"
          animate="onscreen"
          variants={right}
          className="h-full"
        >
          <ul className=" h-full  text-white flex items-center justify-evenly flex-col">
            <li>
              <Link to="/">
                <Button className="common-btn ">
                  <span className=" title">Home</span>

                  <span className="icon">
                    <HomeIcon />
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Button className="common-btn ">
                  <span className="title">About Me</span>
                  <span className="icon">
                    <Person2Icon />
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <Button className="common-btn ">
                  <span className="title">Portfolio</span>
                  <span className="icon">
                    <BusinessCenterIcon />
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button className="common-btn ">
                  <span className="title">Contact</span>
                  <span className="icon">
                    <EmailIcon />
                  </span>
                </Button>
              </Link>
            </li>
          </ul>
        </motion.nav>
      </header>
    </>
  );
}

export default Nav;
