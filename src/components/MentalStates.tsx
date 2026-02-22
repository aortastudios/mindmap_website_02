"use client";
import { motion } from "framer-motion";

import MentalStateCard from "./MentalStateCard";

const MentalStates = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 mt-10 ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <MentalStateCard
          href="/category/Cognitive Wellness"
          src="/images/cognitive1.png"
          src2="/images/cognitive2.png"
          text="Cognitive Wellness"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <MentalStateCard
          href="/category/Emotional Regulation"
          src="/images/regulation1.png"
          src2="/images/regulation2.png"
          text="Emotional Regulation"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <MentalStateCard
          href="/category/Rest and Recovery"
          src="/images/rest1.png"
          src2="/images/rest2.png"
          text="Rest and Recovery"
        />
      </motion.div>
    </div>
  );
};

export default MentalStates;
