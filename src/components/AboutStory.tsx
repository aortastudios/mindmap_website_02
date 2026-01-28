import React from "react";
import Container from "./Container";
import Image from "next/image";

const AboutStory = () => {
  return (
    <section className="my-10">
      <Container>
        <div className="w-full h-176 lg:h-111.75 flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between">
          <div className="flex-1 hidden lg:block  h-full  rounded-[20px] relative">
            <Image src={"/images/story_img.png"} fill alt="story_image" />
          </div>
          <div className="flex-1   h-full text-primary-100">
            <h1 className="text-[24px] font-bold md:text-[52px] my-3">
              Our Story so far
            </h1>
            <p className="leading-6 md:leading-8.25  md:text-[22px] text-[14px]">
              Our Founder David has had a vision for the last 5 years to change
              the landscape of the mental health industry across the world. At
              Mindmap we believe that support for a person’s mental health is
              more than a single instance of mindfulness but rather a continuous
              journey that encapsulates community, access and information
            </p>
            <p className="leading-6 md:leading-8.25 md:text-[22px]  text-[14px]">
              Over the last year, we have been building and creating a solution
              that gives people the opportunity to go on that end of end journey
              and we look forward to releasing it in the future!
            </p>
          </div>
          <div className="flex-1  lg:hidden  rounded-[20px] relative">
            <Image src={"/images/story_img.png"} fill alt="story_image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
