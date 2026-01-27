import Container from "./Container";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="w-full my-10">
      <Container>
        <div className="w-full h-150.25 flex items-center gap-6">
          <div className="flex-1 h-full ">
            {/* Desktop */}
            <form className=" relative hidden lg:block w-full h-full rounded-[30px] text-primary-200 bg-white p-8 border border-[#B1B1B1] ">
              {/* name */}
              <div className="w-full flex items-center gap-6 h-20  mb-5 ">
                <div className=" flex-1 h-full">
                  <h1 className="text-[16px]  pt-2">First Name</h1>
                  <div className="h-11 w-full pt-2">
                    <input
                      placeholder="Ex. John"
                      type="text"
                      className="w-full h-full p-2  rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                    />
                  </div>
                </div>
                <div className=" flex-1 h-full">
                  <h1 className="text-[16px]  pt-2">Last Name</h1>
                  <div className="h-11 w-full pt-2">
                    <input
                      type="text"
                      placeholder="Ex. Alex"
                      className="w-full h-full p-2 rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                    />
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className=" flex-1  my-2  ">
                <h1 className="text-[16px]  pt-2">Email address</h1>
                <div className="h-11 w-full pt-2">
                  <input
                    type="text"
                    placeholder="Ex. john@gmail.com"
                    className="w-full h-full p-2 rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                  />
                </div>
              </div>
              {/* Message */}
              <div className=" flex-1  my-4 ">
                <h1 className="text-[16px]  pt-2">Leave us a Message</h1>
                <div className=" w-full  pt-2">
                  <textarea
                    placeholder="Write Your Message Here"
                    className="w-full min-h-50.25 p-2  placeholder:text-[#B2B2B2] placeholder:text-[14px] rounded-xl bg-[#EEEEEE] resize-none "
                  ></textarea>
                </div>
              </div>
              <div className="w-full h-13 mt-8">
                <button className="bg-primary-100 text-white text-[16px] flex justify-center items-center gap-3 font-medium rounded-4xl w-full h-full cursor-pointer">
                  <span className="">Send Message</span>
                  <Image
                    src={"/icons/chevrons-left.png"}
                    width={20}
                    height={20}
                    alt="chevron_left_icon"
                    className="text-white"
                  />
                </button>
              </div>
            </form>
            {/* mobile */}
            <form className="lg:hidden h-150 w-full text-primary-100 p-5 rounded-4xl border border-[#B1B1B1]">
              {/* name */}
              <div className=" ">
                <h1 className="text-[13px] font-semibold py-3">First name</h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. John"
                    className="w-full h-full p-2  rounded-xl bg-white placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              <div className=" ">
                <h1 className="text-[13px] font-semibold py-3">Last name</h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. Alex"
                    className="w-full h-full p-2  rounded-xl bg-white placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/* email */}
              <div className=" ">
                <h1 className="text-[13px] font-semibold py-3">
                  Email Address
                </h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. john@gmail.com"
                    className="w-full h-full p-2  rounded-xl bg-white placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              <div className=" flex-1  ">
                <h1 className="text-[16px]  pt-2">Leave us a Message</h1>
                <div className=" w-full  pt-2">
                  <textarea
                    placeholder="Write Your Message Here"
                    className="w-full min-h-40.75 p-2  placeholder:text-[#B2B2B2] placeholder:text-[14px] rounded-xl bg-[#EEEEEE] resize-none "
                  ></textarea>
                </div>
              </div>

              <div className="w-full h-10 mt-6">
                <button className="bg-primary-100 text-white text-[14px] flex items-center justify-center font-semibold rounded-4xl w-full h-full cursor-pointer">
                  <span className="">Send Message</span>
                  <Image
                    src={"/icons/chevrons-left.png"}
                    width={20}
                    height={20}
                    alt="chevron_left_icon"
                    className="text-white"
                  />
                </button>
              </div>
            </form>{" "}
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
