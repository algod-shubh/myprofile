import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    //this is a react fragment
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <p className={`${styles.sectionHeadText}`}>Overview.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary  text-[17px] max-w-30px leading-[30px]"
      >
        Strong technical acumen with diverse skillset like proficiency in
        language, impassioned, enthrive well in deadline driven environment.
        Striving to leverage my innate problem solving skills through targeted
        mentorship and challenging projects. Hankering to prove my credentials
        by contributing my bit in your widely acclaimed company.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 text-secondary">
        {services.map((service, idx) => (
          //   <p>hi {service.title}</p>
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
