import React from "react";
import { useEffect, useState, useRef } from "react";
// import { emailjs } from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  return (
    <div className="xl:mt-10 xl:flex-row flex flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] p-4 rounded-2xl"
      >
        <h3 className={`${styles.sectionSubText} text-secondary p-6`}>
          Get in touch
        </h3>
        <p className={`${styles.sectionHeadText} text-secondary p-6`}>
          Contact.
        </p>

        <form
          ref={formRef}
          //   onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Name</span>
            <input
              type="text"
              value={form.name}
              //   onChange={handleChange}
              name="name"
              placeholder="what's your name?"
              className="mt-5 bg-tertiary py-6 px-6 placeholder:text-secondarytext-white rounded-2x1 outlined-none font-medium outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Email ID</span>
            <input
              type="text"
              value={form.email}
              //   onChange={handleChange}
              name="email"
              placeholder="what's your email id?"
              className="mt-5 bg-tertiary py-6 px-6 placeholder:text-secondarytext-white rounded-2x1 outlined-none font-medium outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Message</span>

            <textarea
              rows={8}
              placeholder="What do you want to say?"
              name="message"
              value={form.message}
              className="text-secondary font-medium mb-4  bg-tertiary py-6 px-6"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary px-4 py-4 placeholder:text-secondary text-white border-none rounded-2xl w-fit font-bold "
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
