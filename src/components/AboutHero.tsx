import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-[url('/images/about_bg.png')] bg-no-repeat bg-cover h-full pb-10 lg:pb-0 lg:h-525.25"
      id="hero"
    >
      <Navbar />
      <div className="w-full  h-full pb-20 m lg:pt-40">
        <Container>
          <div className="w-full h-full">
            <div className="w-full pt-35 lg:pt-10 ">
              <Image
                src={"/icons/users.png"}
                width={223}
                height={53}
                alt="user"
                className="mx-auto w-58.25 lg:w-55.75 h-13.25"
              />
            </div>
            <div className="max-w-194.5 mx-auto  mt-5 font-bold text-[24px] md:text-[52px] text-white leading-tight">
              <h1 className="text-center">A quieter space for the</h1>
              <h1 className="text-center">human mind</h1>
            </div>
            <p className="max-w-259.5 mx-auto  text-center text-white my-3  lg:px-20 text-[14px] md:text-[22px] leading-4 md:leading-8">
              In a world of constant noise, pressure, and distraction, we’re
              creating a gentle space for reflection, growth, and self-discovery
              accessible to anyone, anywhere.
            </p>

            <div className="text-white mt-12">
              <h1 className="text-[18px]  md:text-[40px] font-semibold py-3 ">
                MindMap
              </h1>
              <p className="text-[12px] md:text-[24px] lg:py-3 ">
                Mindmap is 3-fold mental health and wellness platform designed
                to provide the 3 necessities needed for positive mental change.
              </p>
              <p className="text-[12px] md:text-[24px] leading-4 md:leading-6.5 lg:py-3">
                Our aim is to provide a digital platform where individuals can
                connect and interact with individuals who want to share their
                experiences as a collective and be a bridge to connect people to
                solutions, services and resources that are right for them in a
                timely manner.
              </p>
            </div>
            <div className="max-w-212.75 h-83.75 relative mx-auto mt-10">
              <Image src={"/icons/about_overlay.png"} fill alt="map_image" />
            </div>
            <div className="text-white mt-5">
              <h1 className="text-[18px] md:text-[40px] font-semibold py-3 ">
                Built for people everywhere
              </h1>
              
              <p className="text-[12px] md:text-[22px] lg:text-[24px] pt-3 ">
                Wherever you are, this space is here for you. 
              </p>
              <p className="text-[12px] md:text-[22px] lg:text-[24px] ">
                Our community
                spans different backgrounds, time zones, and experiences all
                connected by a shared intention to understand ourselves better
                and live with more awareness.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="absolute left-0 w-full bottom-0 h-10 lg:h-99.25 bg-linear-to-t from-[#FFFFFF] via-[#5E4738]/90 to-[#FFFFFF]/0.5 backdrop-blur-xs "></div>
    </section>
  );
};

export default AboutHero;
