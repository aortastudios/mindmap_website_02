import React from "react";
import Container from "./Container";
import DesktopContactForm from "./DesktopContactForm";
import Image from "next/image";
import MobileContactForm from "./MobileContactForm";

const ContactForm = () => {
  return (
    <section className="w-full my-10">
      <Container>
        <div className="w-full h-150.25 flex items-center gap-6">
          <div className="flex-1 h-full ">
            <DesktopContactForm />
            <MobileContactForm />
          </div>
          <div className="flex-1 h-full relative rounded-[30px] hidden lg:block">
            <Image src={"/images/contact_img.png"} alt="Contact_image" fill />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
