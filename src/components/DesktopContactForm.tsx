import Image from "next/image";

const DesktopContactForm = () => {
  return (
    <form className=" relative hidden lg:block w-full h-full rounded-[30px] text-primary-200 bg-white p-8 border border-[#B1B1B1] ">
      {/* name */}
      <div className="w-full flex items-center gap-6 h- mb-5 ">
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
      <div className=" flex-1  ">
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
      <div className=" flex-1  ">
        <h1 className="text-[16px]  pt-2">Leave us a Message</h1>
        <div className=" w-full  pt-2">
          <textarea
            placeholder="Write Your Message Here"
            className="w-full min-h-50.25 p-2  placeholder:text-[#B2B2B2] placeholder:text-[14px] rounded-xl bg-[#EEEEEE] resize-none "
          ></textarea>
        </div>
      </div>
      <div className="w-full h-13 mt-3">
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
  );
};

export default DesktopContactForm;
