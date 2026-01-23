"use client";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className=" home max-w-360 h-228.5 lg:h-263 relative mx-auto bg-[url('/images/mobile_hero_bg.png')] lg:bg-[url('/images/hero_bg.png')]  bg-cover bg-no-repeat  ">
      <Navbar />
      <HeroBanner />
    </main>
  );
};

export default Hero;
