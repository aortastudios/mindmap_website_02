"use client";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main
      className=" home   lg:pt-18 w-full h-190 lg:h-170 relative mx-auto bg-[url('/images/mobile_hero_bg.png')] lg:bg-[url('/images/hero_bg.png')]  bg-cover bg-no-repeat   "
      id="hero"
    >
      <Navbar />
      <HeroBanner />
    </main>
  );
};

export default Hero;
