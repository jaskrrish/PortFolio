import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="w-full md:h-screen h-[60vh] mx-auto mb-5 flex flex-col gap-y-4 justify-center items-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5 my-8`}
      >
        <div>
          <motion.h1
            className={`font-black lg:text-[140px] sm:text-[125px] xs:text-[100px] md:text-[120px] lg:leading-[120px] sm:leading-[8px] md:leading-[90px] mt-2 text-[#b5acac] text-center`}
            variants={textVariant()}
          >
            Jas Krrish <br /> Singh
          </motion.h1>
        </div>
      </div>
      {/* Three Animation */}
      {/* <ComputersCanvas /> */}

      <div className="w-full flex justify-center items-center my-4">
        <a href="#about">
          <div className="md:w-[35px] md:h-[64px] w-[34px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
