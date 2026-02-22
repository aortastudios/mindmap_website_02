import React from "react";
import Container from "./Container";

const ContactHero = () => {
  return (
    <section className=" w-full pt-30 lg:pt-40">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className=" text-[24px] lg:text-[52px] font-bold lg:font-semibold text-center">
            Contact Us
          </h1>
          <p className="hidden lg:block leading-8 text-center text-[22px] px-14">
            If you have any questions about MindMap ltd or want to partner with
            us, join the team and community or simply want to share your story,
            drop us a message below and we will be sure to get back to you as
            soon as possible!
          </p>
          <p className="lg:hidden text-[14px] leading-5 text-center pt-3">
            If you have any questions about MindMap ltd or want to partner with
            us, join the team and community or simply want to share your story,
            drop us a message below and we will be sure to get back to you as
            soon as possible!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
