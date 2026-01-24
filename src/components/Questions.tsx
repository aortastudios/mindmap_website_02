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
      className={`rounded-3xl bg-white shadow w-full ${isOpen ? "h-80.5" : "h-auto"}`}
    >
      {/* Question row */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between px-5 lg:px-10 items-center h-20 lg:h-23"
      >
        <span className="text-[12px] font-medium lg:text-xl text-primary-100">
          {question}
        </span>

        <span className={`${isOpen ?"w-2.5 h-2.5":"w-6 h-6"} ${isOpen ? "lg:w-4 lg:h-4":"lg:w-10.5 lg:h-10.5"} cursor-pointer`}>
          <Image
            src={isOpen ? "/icons/close.png" : "/icons/plus_icon.svg"}
            width={42}
            height={42}
            alt="toggle_icon"
            className="w-full h-full"
          />
        </span>
      </div>

      {/* Answer */}
      {isOpen && (
        <div className="h-37.25 mt-5">
          <div className="px-5 lg:px-10 pb-4 text-sm lg:text-base text-primary-100">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;