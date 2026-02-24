"use client";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main
      className=" home   lg:pt-18 w-full h-190 lg:h-screen relative mx-auto bg-[url('/images/mob_hero.svg')] lg:bg-[url('/images/desk_hero.svg')]  bg-cover bg-no-repeat   "
      id="hero"
    >
      <Navbar />
      <HeroBanner />
    </main>
  );
};

export default Hero;
