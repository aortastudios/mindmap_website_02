"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { mobileSlides, slides } from "@/utils/slider";

const Community = () => {
  // For desktop slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const { title, description, images } = slides[currentSlide];

  // for mobile slide
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () => {
    if (currentSlider < mobileSlides.length - 1)
      setCurrentSlider(currentSlider + 1);
  };

  const prevSlider = () => {
    if (currentSlider > 0) setCurrentSlider(currentSlider - 1);
  };
  const { title2, description2, images2 } = mobileSlides[currentSlider];

  return (
    <section className="max-w-360 mx-auto h-230 lg:h-272.5 relative mb-0 lg:mb-14">
      <Container>
        <div className="w-full h-full pt-20">
          <div className="w-full h-full hidden lg:block">
            {/* Desktop Title + Description */}
            <div className="w-full lg:w-191.75 lg:h-35 mx-auto bricolage">
              <h1 className="font-bold text-[24px] lg:text-[52px] text-center text-primary-100">
                {title}
              </h1>

              <p className="text-primary-100 font-normal text-[16px] lg:text-[22px] text-center mt-4 px-0 lg:px-5">
                {description}
              </p>
            </div>

            {/* Desktop slider */}
            <div className="mt-12 relative  items-center">
              {currentSlide > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-[4%] h-13.5 w-13.5 bg-primary-100 flex items-center justify-center rounded-full"
                >
                  <FaArrowLeftLong className="text-white w-5 h-[14.12px]" />
                </button>
              )}

              <div>
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={860}
                    height={640}
                    alt="community_banner"
                    className="mx-auto"
                  />
                ))}
              </div>

              {currentSlide < slides.length - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-[4%] h-13.5 w-13.5 bg-primary-100 flex items-center justify-center rounded-full"
                >
                  <FaArrowRightLong className="text-white w-5 h-[14.12px]" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile slider */}

          <div className="w-full h-full block lg:hidden">
            <div className="w-full lg:w-191.75 lg:h-35 mx-auto bricolage">
              <h1 className="font-bold text-[24px] lg:text-[52px] text-center text-primary-100">
                {title2}
              </h1>

              <p className="text-primary-100 font-normal text-[16px] lg:text-[22px] text-center mt-4 px-0 lg:px-5">
                {description2}
              </p>
            </div>
            <div className="relative  ">
              {currentSlider > 0 && (
                <button
                  onClick={prevSlider}
                  className="absolute top-1/2 left-0 w-7.5 h-7.5 bg-primary-100 flex items-center justify-center rounded-full"
                >
                  <FaArrowLeftLong className="text-white w-2.25 h-1.75" />
                </button>
              )}

              <div>
                {images2.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={350}
                    height={500}
                    alt="community_banner"
                    className="w-216 h-162.5 object-cover sm:object-contain mx-auto"
                  />
                ))}
              </div>

              {currentSlider < mobileSlides.length - 1 && (
                <button
                  onClick={nextSlider}
                  className="absolute top-1/2 right-0 w-7.5 h-7.5 bg-primary-100 flex items-center justify-center rounded-full"
                >
                  <FaArrowRightLong className="text-white w-2.25 h-1.75" />
                </button>
              )}
            </div>
          </div>

          <div className="absolute left-0 w-full top-0 h-10 bg-linear-to-t from-transparent to-[#FBF4EF] backdrop-blur-sm"></div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
