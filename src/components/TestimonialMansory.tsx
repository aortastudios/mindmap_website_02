import { testimonials } from "@/utils/dummyTestimonial";
import Image from "next/image";
import React from "react";

const TestimonialsMasonry: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Masonry layout using Tailwind columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {testimonials.map((t, index) => (
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
        <div className=" w-38.5 h-10 lg:w-54 lg:h-16 mx-auto mt-5">
          <button className="w-full h-full rounded-[60px] text-base font-medium border border-primary-100">Load more</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMasonry;
