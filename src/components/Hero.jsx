import { motion } from "framer-motion";
import { styles } from "../styles";

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
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I &apos;m <span className="text-[#915EFF]">Jas Krrish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Passionate Individual Driving Positive Change in Technology and
            Education.With Strong Skills DSA In Java and Web Development using
            React JS and a WEB3 enthusiast.
            {/* Graduating
            In 2027 With A Bachelor&apos;s In Computer Science And Engineering
            From SRM University, Chennai. Collaboration, Innovation, And
            Lifelong Learning Are At The Heart Of My Pursuits. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
