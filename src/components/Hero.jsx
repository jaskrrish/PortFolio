import { motion } from "framer-motion";
import { styles } from "../styles";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
          >
            Hi, I &apos;m <span className="text-[#915EFF]">Jas Krrish</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
          >
            A Passionate Individual Driving Positive Change in Technology.{" "}
            <br />
            With Strong Skills In Java and Full Stack Development <br />
            {/* Graduating
            In 2027 With A Bachelor&apos;s In Computer Science And Engineering
            From SRM University, Chennai. Collaboration, Innovation, And
            Lifelong Learning Are At The Heart Of My Pursuits. */}
          </motion.p>
        </div>
      </div>
      {/* Three Animation */}
      {/* <Computers /> */}
    </section>
  );
};

export default Hero;
