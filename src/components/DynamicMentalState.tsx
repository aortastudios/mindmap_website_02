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
                ? "/images/cognitive1.png"
                : category === "Emotional Regulation"
                  ? "/images/regulation1.png"
                  : "/images/rest1.png"
            }
            text={category}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DynamicMentalState;
