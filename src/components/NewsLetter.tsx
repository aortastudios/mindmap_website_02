import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full lg:w-[30%] h-66 bg-white rounded-[30px] flex items-center justify-center">
      <div className=" w-[95%] h-[95%]  p-5">
        <h3 className="text-base lg:text-[18px] font-semibold text-[#B2B2B2]">
          Join the <span className="text-primary-200">Newsletter</span>
        </h3>
        <p className="text-[12px] font-[400px] text-[#B2B2B2]">
          Be up to date with content
        </p>
        <div className="w-full h-13 mt-8">
          <input
            type="text"
            className="w-full h-full bg-[#F4F4F4] rounded-[26px] placeholder:text-[12px] placeholder:italic placeholder:font-[400px] placeholder:pl-3 placeholder:text-[#B2B2B2] pl-3 outline-none"
            placeholder="Enter your email address"
          />
        </div>
        <div className="w-full h-11 mt-5">
          <button
            type="submit"
            className="w-full h-full bg-primary-200 flex items-center justify-center text-white rounded-[26px] text-base font-medium "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
