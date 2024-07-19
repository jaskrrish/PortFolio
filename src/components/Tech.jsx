import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SkillsCard = ({ icon, name }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.75)}
      className="w-full border-4 border-white px-2 rounded-[20px] shadow-card"
    >
      <motion.div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent rounded-[20px] py-2 px-2 min-h-[105px] flex gap-2 items-center justify-center"
      >
        <img
          src={icon}
          alt="web-development"
          className={`w-12 h-12 object-contain ${
            name === "Three JS" ? "invert" : ""
          }`}
        />

        <h3 className="text-white text-[16px] font-bold text-center">{name}</h3>
      </motion.div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>
      <div className="flex m-4 flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          // <div className="w-28 h-28" key={technology.name}>
          // </div>
          <SkillsCard
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
