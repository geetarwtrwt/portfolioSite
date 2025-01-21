import React from "react";
import cv from "../assets/GeetaRawatCV.pdf";
import myImg from "../assets/me/3.jpg";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion } from "framer-motion";
import { opacityLeft, parent, up } from "../assets/framer";

function Home() {
  return (
    <section className="h-screen max-md:h-full">
      <div className=" container  flex items-center gap-16 max-md:flex-col ">
        <div className="w-[30%] max-md:w-full">
          <motion.img
            variants={opacityLeft}
            initial="offscreen"
            whileInView="onscreen"
            src={myImg}
            className="w-full h-[500px] rounded-lg"
          />
        </div>

        <motion.div
          className="w-[60%] text-white space-y-6 max-md:w-full"
          variants={parent}
          initial="offscreen"
          whileInView="onscreen"
        >
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={up}
            className="text-6xl font-bold max-lg:text-[42px] max-xs:text-[32px]"
          >
            <span className="text-mainColor block ">I'm Geeta Rawat</span>
            Front-End Developer
          </motion.h1>

          <motion.p
            variants={up}
            initial="offscreen"
            whileInView="onscreen"
            className="text-xl leading-8 max-xs:text-lg"
          >
            Hi, I'm a passionate Front-End Developer skilled in creating
            visually stunning and responsive websites. I specialize in crafting
            seamless user experiences using HTML, CSS, JavaScript, and
            frameworks like React, TailwindCSS, Bootstrap, and SwiperJS. With
            tools like Framer Motion and GSAP, I add dynamic animations,
            bringing designs to life. My focus is on building pixel-perfect,
            responsive interfaces that not only look great but also perform
            flawlessly across all devices.
          </motion.p>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={up}
            className="flex"
          >
            <Link to="/about">
              <button className="capitalize border-[0.5px] py-2 px-6 rounded-full border-mainColor max-xs:px-2.5 max-xs:text-sm hover:bg-mainColor duration-500">
                More about me
                <span className="icon">
                  <ChevronRightIcon />
                </span>
              </button>
            </Link>
            <Link to={cv} target="_blank" download>
              <button className="border-[0.5px] py-2 px-6 rounded-full border-mainColor ms-4 max-xs:px-2.5 max-xs:text-sm hover:bg-mainColor duration-500">
                Download CV
                <span className="icon">
                  <FileDownloadIcon />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
