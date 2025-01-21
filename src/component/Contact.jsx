import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { opacityLeft, right } from "../assets/framer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      access_key: "ccd20fe8-f242-4aae-b9b9-8ea1cc404d1b",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!", { autoClose: 2000 });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <section className="h-full text-white ">
        <div className="container ">
          <h1 className=" text-6xl uppercase font-extrabold text-center relative max-sm:text-5xl max-xs:text-4xl">
            Get in <span className="text-mainColor">touch</span>
            <span className="titleBg">Contact</span>
          </h1>

          <div className="my-24 flex gap-16 max-lg:flex-wrap max-lg:mb-0">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={opacityLeft}
              className="w-[40%] space-y-6 max-lg:w-[100%]"
            >
              <h2 className="uppercase font-bold text-3xl">dont be shy !</h2>
              <p className="">
                Feel free to get in touch with me. I always open to discussing
                new projects, creative ideas or opportunities to be part of your
                visions.
              </p>
              <div className="flex gap-4 items-center">
                <DraftsIcon className="!text-4xl text-mainColor" />
                <div className="flex flex-col">
                  <span className="text-white6 font-extrabold text-xl uppercase">
                    Mail me
                  </span>
                  <a className="font-semibold" href="mailto:rwtgeet6@gmail.com">
                    rwtgeet6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <LocalPhoneIcon className="!text-4xl text-mainColor" />
                <div className="flex flex-col">
                  <span className="text-white6 font-extrabold text-xl uppercase">
                    call me
                  </span>
                  <a className="font-semibold" href="tel:+919971790421">
                    +919971790421
                  </a>
                </div>
              </div>
              <ul className="flex justify-start gap-5">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100052865314101"
                    target="_blank"
                  >
                    <Button className="!bg-white6 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-white !text-lg hover:!bg-mainColor duration-[0.8s]">
                      <FaFacebookF />
                    </Button>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/geeta__rawat99/?igsh=MXFkMzBhbzl3M3Ficg%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="!bg-white6 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-white !text-lg hover:!bg-mainColor duration-[0.8s]">
                      <InstagramIcon />
                    </Button>
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={right}
              className="w-[60%] contactForm  max-lg:w-[100%]"
            >
              <form onSubmit={onSubmit} className="w-full">
                <div className="flex gap-4 max-sm:flex-col">
                  <div className="">
                    <input
                      placeholder="your name"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="your email"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="your subject"
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="my-4 max-lg:mt-6">
                  <div>
                    <textarea
                      placeholder="your message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={onChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <Button className="common-btn" type="submit">
                  send message
                  <span className="icon">
                    <IoIosSend />
                  </span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default Contact;
