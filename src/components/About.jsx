import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Jas Krrish Singh, A Passionate Individual Driving Positive Change
        in Technology and Education.With Strong Skills In Java, Web Development,
        And Management, I Aim To Make A Transformative Impact And Inspire Future
        Tech Enthusiasts.Graduating In 2027 With A Bachelor's In Computer
        Science And Engineering From SRM University, Chennai. Collaboration,
        Innovation, And Lifelong Learning Are At The Heart Of My Pursuits.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
