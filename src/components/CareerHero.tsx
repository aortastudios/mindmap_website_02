import React from "react";
import Container from "./Container";

const CareerHero = () => {
  return (
    <section className=" w-full  h-full  mt-35 lg:mt-0 lg:pt-40">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className=" text-[24px] lg:text-[52px] font-bold text-center">
            Careers
          </h1>
          <p className="hidden lg:block text-center text-[22px] px-8 leading-8">
            We are currently recruiting for open roles in the product, marketing
            and operations team. If you are interested in joining the team
            please submit your details below
          </p>
          <p className="lg:hidden text-[12px] text-center leading-5 pt-3">
            We are currently recruiting for open roles in the product, marketing
            and operations team. If you are interested in joining the team
            please submit your details below
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CareerHero;
