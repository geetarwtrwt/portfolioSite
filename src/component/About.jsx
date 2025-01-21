import React from "react";
import cv from "../assets/GeetaRawatCV.pdf";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
// import { SemiCircleProgressWithIndicator } from "react-progressbars-with-indicator";

import { motion } from "framer-motion";
import { parent, opacityLeft, up } from "../assets/framer";

import html from "../assets/skill/html.png";
import css from "../assets/skill/css.png";
import js from "../assets/skill/js.png";
import react from "../assets/skill/react.png";
import bootstrap from "../assets/skill/bootstrap.png";
import tailwind from "../assets/skill/tailwind2.png";
import framerMotion from "../assets/skill/framerMotion.png";
import github from "../assets/skill/github.png";
import gsap from "../assets/skill/gsap1.png";
import swiper from "../assets/skill/swiper.png";
function About() {
  let skills = [
    { id: 0, url: html, label: "HTML" },
    { id: 1, url: css, label: "CSS" },
    { id: 2, url: js, label: "Javascript" },
    { id: 3, url: react, label: "React" },
    { id: 4, url: bootstrap, label: "Bootrsap" },
    { id: 5, url: tailwind, label: "Tailwind" },
    { id: 6, url: framerMotion, label: "Framer Motion" },
    { id: 7, url: github, label: "Github" },
    { id: 8, url: gsap, label: "Gsap" },
    { id: 9, url: swiper, label: "Swiper" },
  ];

  return (
    <section className="h-full text-white max-md:h-full">
      <div className="container">
        <h1 className=" text-6xl uppercase font-extrabold text-center relative max-sm:text-5xl max-xs:text-4xl">
          about <span className="text-mainColor">me</span>
          <span className="titleBg ">resume</span>
        </h1>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={parent}
          className="pt-28 "
        >
          <motion.h2
            variants={opacityLeft}
            className="pb-8 text-4xl uppercase font-semibold text-center max-sm:text-2xl"
          >
            personal info
          </motion.h2>

          <motion.div
            variants={up}
            className=" flex justify-evenly max-md:flex-col gap-6"
          >
            <div className="space-y-3 ">
              <h4 className="text-white6 text-lg font-medium">
                First Name: <span className="text-white">Geeta</span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Last Name: <span className="text-white">Rawat</span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Age: <span className="text-white">25 Years</span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Nationality: <span className="text-white">Indian</span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Freelance: <span className="text-white">Available</span>
              </h4>
            </div>

            <div className="space-y-3  ">
              <h4 className="text-white6 text-lg font-medium">
                Address: <span className="text-white">Delhi</span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Phone:
                <span className="text-white">
                  <a href="tel:+919971790421">+919971790421</a>
                </span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Email:
                <span className="text-white">
                  <a href="mailto:rwtgeet6@gmail.com">rwtgeet6@gmail.com</a>
                </span>
              </h4>
              <h4 className="text-white6 text-lg font-medium">
                Language: <span className="text-white">Hindi, English</span>
              </h4>
            </div>
          </motion.div>

          <motion.div variants={up} className="!mt-8 max-md:!mt-2 text-center">
            <Link to={cv} target="_blank" download>
              <button className="common-btn max-sm:!pr-10  max-sm:!px-4  max-sm:!py-1.5 !tracking-normal">
                Download CV
                <span className="icon max-sm:!w-[35px] max-sm:!h-[36px] ">
                  <FileDownloadIcon className="max-sm:!text-lg" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <hr className="w-1/2 mx-auto border-t-[0.5px] my-16" />

        <div className="py-20">
          <h2 className="pb-16 text-4xl uppercase font-semibold text-center max-sm:text-2xl">
            My Skills
          </h2>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={parent}
            className="flex flex-wrap justify-between  gap-10 max-md:gap-4"
          >
            {skills.map((e) => {
              return (
                <motion.div
                  variants={up}
                  key={e.id}
                  className="w-[15%] flex flex-col items-center gap-2 bg-gray-200 text-black font-extrabold p-4 rounded-lg max-lg:w-[20%] max-sm:w-[30%] max-xs:w-[45%]"
                >
                  <img
                    src={e.url}
                    className="w-[80px] h-[80px]  object-cover"
                  />
                  <h5 className="text-lg">{e.label}</h5>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <hr className="w-1/2 mx-auto border-t-[0.5px] my-16" />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={parent}
        >
          <h2 className="pb-16 text-4xl uppercase font-semibold text-center max-sm:text-2xl">
            Experience & Education
          </h2>

          <div className="flex gap-20 experienceWork max-md:flex-col max-md:gap-10">
            <div className="w-1/2 max-md:w-full">
              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <BusinessCenterIcon />
                  </span>
                </div>
                <div className="right">
                  <h4 className="my-3">Fresher</h4>
                  <p>
                    I am a fresher passionate about front-end development and
                    design. I have learned skills like HTML, CSS,
                    JavaScript,React and I am excited to bring my creativity and
                    problem-solving skills to real projects.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="w-1/2 max-md:w-full">
              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <SchoolIcon />
                  </span>
                </div>
                <div className="right">
                  <span className="badge badge-default">2023 - Present</span>
                  <h4 className="my-3">
                    Full Stack Developer- <span>Dice Academy</span>
                  </h4>
                  <p>
                    Currently pursuing a Full Stack Development Course from Dice
                    Academy
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <SchoolIcon />
                  </span>
                </div>
                <div className="right">
                  <span className="badge badge-default">2023</span>
                  <h4 className="my-3">
                    Master's degree - <span>IGNOU</span>
                  </h4>
                  <p>
                    Completed my Master’s in Hindi from IGNOU. This degree
                    enhanced my understanding of Hindi language and literature.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <SchoolIcon />
                  </span>
                </div>
                <div className="right">
                  <span className="badge badge-default">2019</span>
                  <h4 className="my-3">
                    graduation -
                    <span>P.G.D.A.V(EVE.) (University of Delhi)</span>
                  </h4>
                  <p>
                    Graduated with a Bachelor's degree in Hindi from
                    P.G.D.A.V(EVE) (University of Delhi).
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <SchoolIcon />
                  </span>
                </div>
                <div className="right">
                  <span className="badge badge-default">2016</span>
                  <h4 className="my-3">
                    12<sup>th</sup> - <span>CBse</span>
                  </h4>
                  <p>
                    Completed my higher secondary education in the Humanities
                    stream, with a subjects like History, Political Science,
                    English, Physical Education and Hindi.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={up}
                whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
                className="box d-flex gap-5"
              >
                <div className="left">
                  <span className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <SchoolIcon />
                  </span>
                </div>
                <div className="right">
                  <span className="badge badge-default">2014</span>
                  <h4 className="my-3">
                    10<sup>th</sup> - <span>CBse</span>
                  </h4>
                  <p>
                    Completed my secondary education with a general focus on
                    core subjects like Mathematics, Science, Hindi , English,
                    Sanskrit and Social Studies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
