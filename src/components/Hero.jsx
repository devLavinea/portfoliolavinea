import { motion } from "framer-motion";
import React from "react";
import  {ComputersCanvas}  from "../canvas";

const Hero = () => {
  return (
    <section
      className={` relative  w-full lg:h-[100vh] md:h-[50vh] h-[32vh] flex justify-center items-center`}
    >
      <div className="  w-full h-full bg-custom1 opacity-5 rounded-full filter blur-xl absolute bottom-0  "></div>

      <ComputersCanvas/>

      <div className=" hidden lg:flex  absolute bottom-15 md:bottom-32 w-full  justify-center items-center">
        <a href="#work">
          <div className="w-[20px] h-[44px]   rounded-3xl border-3 border-gray-700 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="md:w-2.5 md:h-2.5 w-1.5 h-1.5 rounded-full bg-gray-700 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
