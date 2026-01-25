import Image from "next/image";
import React from "react";

const Controls = () => {
  return (
    <div className="w-full flex items-center justify-between gap-3 mt-5">
      <div className="flex items-center">
        <Image
          src={"/icons/prev.png"}
          width={82}
          height={20}
          alt="previous_button"
          className="w-18.5 h-5 lg:w-20.5 lg:h-5"
        />
      </div>
      <div className="flex gap-0.5 text-[#667085] pt-5">
        <span className="w-10 h-10 font-medium  text-[12px] lg:text-[14px] bg-[#F9F5FF] text-[#7F56D9]">
          1
        </span>
        <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
          2
        </span>
        <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
          3
        </span>
        <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
          ...
        </span>
        <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
          8
        </span>
        <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
          9
        </span>
        <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
          10
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src={"/icons/next.png"}
          width={82}
          height={20}
          alt="next_button"
          className="w-18.5 h-5 lg:w-20.5 lg:h-5"
        />
      </div>
    </div>
  );
};

export default Controls;
