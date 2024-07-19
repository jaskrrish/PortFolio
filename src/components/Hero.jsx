import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utils/motion";

const Hero = ({ textEnter, textLeave }) => {
  return (
    <section className="relative w-full h-[70vh] mx-auto mb-5">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div>
          <motion.h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className={`font-black lg:text-[140px] sm:text-[105px] xs:text-[90px] text-[40px] lg:leading-[120px] sm:leading-[90px] leading-[90px] mt-2 text-[#b5acac] text-center`}
            variants={textVariant()}
          >
            Jas Krrish <br /> Singh
          </motion.h1>
        </div>
      </div>
      {/* Three Animation */}
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
