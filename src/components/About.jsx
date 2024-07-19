import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { JasResume, LinkedIn, Twitter, github, JasKrrish } from "../assets";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-wrap-reverse">
        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am Jas Krrish Singh, A Passionate Individual Driving Positive
            Change in Technology and Education.With Strong Skills In Java, Web
            Development, And Management, I Aim To Make A Transformative Impact
            And Inspire Future Tech Enthusiasts.Graduating In 2027 With A
            Bachelor&apos;s In Computer Science And Engineering From SRM
            University, Chennai. Collaboration, Innovation, And Lifelong
            Learning Are At The Heart Of My Pursuits.
          </motion.p>
          <div className="my-8">
            <a
              href={JasResume}
              target="_blank"
              className="bg-[#e3e0e0] py-2.5 px-8 rounded-3xl outline-none w-fit text-black font-bold shadow-md shadow-primary border-[3px] border-[#e3e0e0] hover:bg-transparent hover:text-white"
            >
              View My Resume
            </a>
            <div className="my-10 flex">
              <a
                href="https://github.com/jaskrrish"
                className="bg-[#e3e0e0] p-2 rounded-full mx-4 border-[3px] border-[#e3e0e0] hover:bg-transparent"
              >
                <img
                  src={github}
                  alt="Github Icon"
                  width={35}
                  height={35}
                  className="invert hover:invert-0"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jas-krrish-singh-896382239"
                className="bg-[#e3e0e0] p-2 rounded-full mx-4 border-[3px] border-[#e3e0e0] hover:bg-transparent"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn Icon"
                  width={35}
                  height={35}
                  className="hover:invert"
                />
              </a>
              <a
                href="https://twitter.com/jas_krrish"
                className="bg-[#e3e0e0] p-2 rounded-full mx-4 border-[3px] border-[#e3e0e0] hover:bg-transparent"
              >
                <img
                  src={Twitter}
                  alt="Twitter Icon"
                  width={35}
                  height={35}
                  className="hover:invert"
                />
              </a>
            </div>
          </div>
        </div>
        <Tilt className="w-[300px]">
          <img
            className="mb-6 ml-4 rounded-xl drop-shadow-lg"
            src={JasKrrish}
            alt="Jas-Krrish-Singh"
          />
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
