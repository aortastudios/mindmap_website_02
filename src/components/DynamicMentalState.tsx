"use client";
import { motion } from "framer-motion";
import MentalStateCard from "./MentalStateCard";
import Link from "next/link";

const DynamicMentalState = ({ categories }: { categories: string[] }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 my-10 ">
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
                ? "/images/cognitive.png"
                : category === "Emotional Regulation"
                  ? "/images/regulation.png"
                  : "/images/rest.png"
            }
            text={category}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DynamicMentalState;
