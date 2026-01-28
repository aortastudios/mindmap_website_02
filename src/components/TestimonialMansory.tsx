"use client";
import { testimonials } from "@/utils/dummyTestimonial";
import Image from "next/image";
import React, { useState } from "react";

const TestimonialsMasonry: React.FC = () => {
  // for mobile
  const [incre, setIncre] = useState(4);
  // for pc
  const [increment, setIncreament] = useState(12);

  // for mobile
  const loadMore = () => {
    if (incre < testimonials.length - 1) {
      setIncre((prev) => (prev += 3));
    }
    return;
  };
  // for pc
  const setMore = () => {
    if (increment < testimonials.length - 1) {
      setIncreament((prev) => (prev += 3));
    }
    return
  };
  return (
    <section className=" lg:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* PC */}
        <div className="hidden lg:block columns-1 sm:columns-2 md:columns-3 gap-6">
          {testimonials.slice(0, increment).map((t, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid bg-white shadow-md rounded-lg py-5 px-4"
            >
              <p className="text-gray-700 italic">“{t.content}”</p>

              <div className="flex justify-between mt-5">
                <div className="">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{t.title}</p>
                </div>
                <div className="">
                  <Image
                    width={48}
                    height={48}
                    src={t.src}
                    alt={`${t.name} avatar`}
                    className="w-12 h-12 rounded-full mb-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* MOBILE */}
        <div className="lg:hidden lock columns-1 sm:columns-2 md:columns-3 gap-6">
          {testimonials.slice(0, incre).map((t, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid bg-white shadow-md rounded-lg py-5 px-4"
            >
              <p className="text-gray-700 italic">“{t.content}”</p>

              <div className="flex justify-between mt-5">
                <div className="">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{t.title}</p>
                </div>
                <div className="">
                  <Image
                    width={48}
                    height={48}
                    src={t.src}
                    alt={`${t.name} avatar`}
                    className="w-12 h-12 rounded-full mb-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pc */}
        <div className=" w-38.5 h-10 lg:w-54 lg:h-16 mx-auto mt-5 hidden lg:block">
          <button
            onClick={setMore}
            className="w-full h-full rounded-[60px] text-base font-medium border text-primary-100 bg-white border-primary-100"
          >
            Load more
          </button>
        </div>
        {/* mobile */}
        <div className=" w-38.5 h-10 lg:w-54 lg:h-16 mx-auto mt-5 lg:hidden">
          <button
            onClick={loadMore}
            className="w-full h-full rounded-[60px] text-base font-medium border text-primary-100 bg-white border-primary-100"
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMasonry;
