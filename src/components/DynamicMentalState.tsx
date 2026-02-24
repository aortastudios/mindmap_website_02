"use client";
import { motion } from "framer-motion";
import MentalStateCard from "./MentalStateCard";

const DynamicMentalState = ({ categories }: { categories: string[] }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-11 my-10 ">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full"
        >
          <MentalStateCard
            href={`/category/${category}`}
            src={
              category === "Cognitive Wellness"
                ? "/images/cogsvg1.svg"
                : category === "Emotional Regulation"
                  ? "/images/regsvg1.svg"
                  : "/images/restsvg1.svg"
            }
            src2={
              category === "Cognitive Wellness"
                ? "/images/cogsvg2.svg"
                : category === "Emotional Regulation"
                  ? "/images/regsvg2.svg"
                  : "/images/restsvg2.svg"
            }
            text={category}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DynamicMentalState;
