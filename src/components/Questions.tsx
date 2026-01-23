import Image from "next/image";
import React from "react";
interface QuestionProp {
  text: string;
}

const Questions = ({ text }: QuestionProp) => {
  return (
    <div className="h-12.5 lg:h-23 w-full rounded-3xl bg-white">
      <div className="w-full h-full flex justify-between px-5 lg:px-10 items-center">
        <div className="text-[12px] font-medium lg:text-xl text-primary-100">
          {text}
        </div>
        <div className="">
          <span className="w-6.25 h-6.25 lg:w-10.5 lg:h-10.5 cursor-pointer">
            <Image
              src="/icons/plus_icon.svg"
              width={42}
              height={42}
              alt="plus_icon"
              className="w-full h-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Questions;
