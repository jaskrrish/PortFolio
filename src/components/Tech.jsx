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
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
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
