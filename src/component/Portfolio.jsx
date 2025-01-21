import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import img1 from "../assets/portfolilo/1.png";
import img2 from "../assets/portfolilo/2.png";
import img3 from "../assets/portfolilo/3.png";
import img4 from "../assets/portfolilo/4.png";
import img5 from "../assets/portfolilo/5.png";
import img6 from "../assets/portfolilo/6.png";
import { motion } from "framer-motion";
import { parent, up } from "../assets/framer";

let workImg = [
  {
    id: 0,
    det: "html, css",
    imgUrl: img1,
    projectName: "CREATIVE WEB DESIGN",
    link: "https://creative-web-design-geeta.netlify.app/",
  },
  {
    id: 1,
    det: "html, bootstrap , javascript, gsap",
    imgUrl: img2,
    projectName: "Gourmet au Catering",
    link: "https://gourmet-au-catering-geeta.netlify.app/",
  },
  {
    id: 2,
    det: "html, css , javascript",
    imgUrl: img3,
    projectName: "Cara",
    link: "https://cara-geeta.netlify.app/",
  },
  {
    id: 3,
    det: "html, bootstrap , javascript, gsap",
    imgUrl: img4,
    projectName: "Foodies",
    link: "https://foodies-geeta.netlify.app/",
  },
  {
    id: 4,
    det: "html, css , javascript",
    imgUrl: img5,
    projectName: "End Game",
    link: "https://end-game-geeta.netlify.app/",
  },
  {
    id: 5,
    det: "react, tailwind css, framer motion",
    imgUrl: img6,
    projectName: "Portfolio Website",
    link: "https://portfolio-geeta.netlify.app/",
  },
];
function Portfolio() {
  return (
    <>
      <section className="h-full text-white ">
        <div className="container ">
          <h1 className=" text-6xl uppercase font-extrabold text-center relative max-sm:text-5xl max-xs:text-4xl">
            My <span className="text-mainColor">Portfolio</span>
            <span className="titleBg">works</span>
          </h1>

          <motion.div
            variants={parent}
            initial="offscreen"
            whileInView="onscreen"
            className="my-24 flex gap-12 flex-wrap max-md:gap-4 max-sm:flex-wrap  justify-between max-xs:gap-6"
          >
            {workImg.map((e) => {
              return (
                <motion.div
                  variants={up}
                  key={e.id}
                  className="w-[30%] h-[200px] bg-white rounded-lg  text-center  group max-sm:w-[45%] max-xs:w-[100%]"
                >
                  <a href={e.link} target="_blank">
                    <div className="overflow-hidden rounded-lg relative">
                      <img
                        src={e.imgUrl}
                        className="w-full h-full object-cover group-hover:scale-[1.2] group-hover:-rotate-1 duration-[0.5s]"
                      />
                      <div className="absolute top-0 left-0  bg-black5 w-full h-full flex items-center justify-center flex-col gap-5 duration-[0.5s] opacity-0 group-hover:opacity-80">
                        <LinkIcon className="text-mainColor !text-4xl" />
                        <h3 className="!text-white font-semibold text-xl">
                          {e.projectName}
                        </h3>
                      </div>
                    </div>
                    <p className="w-full text-lg text-black capitalize">
                      {e.det}
                    </p>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
