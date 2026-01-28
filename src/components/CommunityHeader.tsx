import React from "react";
import Container from "./Container";

const CommunityHeader = () => {
  return (
    <section className=" w-full pt-30 lg:pt-5">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className=" text-[24px] lg:text-[48px] font-bold lg:font-semibold text-center">
            What our community members are saying
          </h1>
          <p className="hidden lg:block leading-8 text-center text-[22px] max-w-240 mx-auto">
            Explore inspiring feedback from individuals who transformed their
            lives through therapy and holistic wellness.
          </p>
          <p className="lg:hidden text-[14px] leading-5 text-center pt-3">
            Explore inspiring feedback from individuals who transformed their lives through therapy and holistic wellness.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CommunityHeader;
