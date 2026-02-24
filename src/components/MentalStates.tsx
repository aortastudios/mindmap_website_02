"use client";
import { motion } from "framer-motion";

import MentalStateCard from "./MentalStateCard";

const MentalStates = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 mt-10 w-full ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full"
      >
        <MentalStateCard
          href="/category/Cognitive Wellness"
          src="/images/cogsvg1.svg"
          src2="/images/cogsvg2.svg"
          text="Cognitive Wellness"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full"
      >
        <MentalStateCard
          href="/category/Emotional Regulation"
          src="/images/regsvg1.svg"
          src2="/images/regsvg2.svg"
          text="Emotional Regulation"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full"
      >
        <MentalStateCard
          href="/category/Rest and Recovery"
          src="/images/restsvg1.svg"
          src2="/images/restsvg2.svg"
          text="Rest and Recovery"
        />
      </motion.div>
    </div>
  );
};

export default MentalStates;
