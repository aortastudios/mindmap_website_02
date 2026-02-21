"use client";
import Image from "next/image";
import React, { useState } from "react";

const CategorySearch = ({ cleanedSlug }: { cleanedSlug: string }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-294.5 h-16 flex items-center border border-primary-100 rounded-full overflow-hidden"
    >
      <div className="flex justify-center items-center w-10 h-5 lg:w-15 lg:h-10">
        <Image
          src="/icons/search.png"
          alt="Search_icon"
          width={18}
          height={18}
        />
      </div>
      <div className="w-full h-full flex-1">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-full outline-none placeholder:text-primary-100"
          placeholder={`search for ${cleanedSlug.toLocaleLowerCase()} articles`}
        />
      </div>
      <button
        type="submit"
        className="h-full w-[25%] lg:w-[13%] flex items-center justify-center bg-primary-100 text-white text-[14px] lg:text-[20px] font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default CategorySearch;
