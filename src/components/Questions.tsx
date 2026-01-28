"use client";
import { useState } from "react";
import Image from "next/image";

interface QuestionProp {
  question: string;
  answer: string;
}

const Questions = ({ question, answer }: QuestionProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl bg-white shadow w-full  ${isOpen ? " lg:h-60 h-65" : "h-auto"}`}
    >
      {/* Question row */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between px-5 lg:px-10 items-center h-20 lg:h-23"
      >
        <span
          className={`text-[12px] md:text-lg ${isOpen ? "font-semibold" : "font-medium"} lg:text-xl text-primary-100`}
        >
          {question}
        </span>

        <span className={`"w-6 h-6  lg:w-10.5 lg:h-10.5 cursor-pointer`}>
          <Image
            src={isOpen ? "/icons/close_icon.png" : "/icons/plus_icon.svg"}
            width={42}
            height={42}
            alt="toggle_icon"
            className="w-full h-full"
          />
        </span>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out  flex gap-2 relative ${
          isOpen ? "max-h-37.25 " : "max-h-0"
        }`}
      >
        <div className="h-5 w-0.5 lg:w-1 bg-primary-100 absolute top-2 left-2.5 lg:left-6 "></div>
        <div className="px-5 lg:px-10 pb-4 text-sm md:text-base text-primary-100 leading-8">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Questions;
