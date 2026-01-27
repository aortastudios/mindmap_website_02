"use client";
import Image from "next/image";
import ReflectingButton from "./ReflectingButton";
import WaitlistButton from "./WaitListButton";
import Container from "./Container";
import { useUiStore } from "@/store/uiStore";

const HeroBanner = () => {
  const { isMobileNavOpen } = useUiStore();

  return (
    <section className=" max-w-360 min-h-screen mx-auto mt-4 lg:mt-14 pt-40 lg:pt-0 ">
      <Container>
        {/* desktop */}
        <div className="w-full h-full hidden lg:block">
          <div className=" w-full h-165  backdrop-blur-sm  lg:rounded-[70px] flex flex-col items-center justify-center border border-white/10 overflow-hidden relative">
            <div className=" w-182.75 h-66.5   ">
              <h1 className="text-5xl font-bold text-white flex flex-col items-center">
                <span className=" ">A quiet space for a</span>
                <span className="">loud mind</span>
              </h1>
              <p className="text-white font-medium text-2xl flex flex-col items-center mt-8  ">
                <span className="">
                  Track your moods, reflect daily, and build habits that
                  actually stay
                </span>{" "}
                <span className="">
                  with you, without pressure, noise or doubt.
                </span>{" "}
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 ">
              <div className="w-126.5 h-13.5 flex items-center gap-6">
                <ReflectingButton path="/contact" name="Start Reflecting" className="latoclass flex items-center justify-center gap-2 w-full lg:w-65 h-14 lg:h-full z-10 bg-white text-primary-100  text-[14px] lg:text-xl font-semibold rounded-full" />
                <WaitlistButton className=" flex items-center justify-center w-full lg:w-54 h-14  z-10  border-t border-t-gray-200 border-r border-r-gray-200 shadow-md    font-semibold text-[#ffffff] rounded-full" />
              </div>
            </div>
            <div className="w-87.25 h-87.25 absolute  left-0 bottom-44">
              <Image
                src={"/images/hero_img1.png"}
                width={349}
                height={349}
                alt="hero_image"
              />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div
          className={` ${
            isMobileNavOpen ? "hidden" : "block"
          } lg:hidden w-full backdrop-blur-md rounded-[30px] h-112.5   p-5 text-white  z-0   relative overflow-hidden `}
        >
          <div className="w-35 h-60 absolute overflow-hidden -left-2.5 -bottom-11  ">
            <Image
              src={"/images/hero_img1.png"}
              width={140}
              height={220}
              alt="hero_image"
            />
          </div>
          <div className=" h-full mt-6 ">
            <div className="">
              <h1 className="text-[24px] sm:text-[28px] md:text-4xl font-extrabold text-white flex flex-col items-center">
                <span className=" ">A quiet space for a</span>
                <span className="">loud mind</span>
              </h1>
            </div>
            <p className=" text-center font-medium text-[16px] md:text-[24px] text-white mt-4 md:px-4">
              Track your moods, reflect daily, and build habits that actually
              stay with you, without pressure, noise or doubt.
            </p>
            <div className="flex flex-col items-center gap-3 mt-12">
              <ReflectingButton path="/contact" name="Start Reflecting" className="latoclass flex items-center justify-center gap-2 w-full md:w-[60%] lg:w-full  h-13  z-10 bg-white text-primary-100  text-[14px] lg:text-xl font-semibold rounded-full" />
              <WaitlistButton className="waitlist-btn flex items-center justify-center w-full md:w-[60%] lg:w-full backdrop-blur-md  h-13  z-10  bg-white/20 border-t border-t-gray-200 border-r border-r-gray-200 shadow-md   font-semibold text-white rounded-full" />
            </div>
          </div>
        </div>
      </Container>
           <div className="absolute  left-0 w-full bottom-0 h-40 bg-linear-to-t from-[#FBF4EF] to-transparent backdrop-blur-xs "></div>

    </section>
  );
};

export default HeroBanner;
