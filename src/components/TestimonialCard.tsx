import type { TestimonialCardProp } from "@/types/testimonial";
import Image from "next/image";

const TestimonialCard = ({ name, content, src }: TestimonialCardProp) => {
  return (
    <div className=" w-full lg:w-128.75  h-74 flex justify-center items-center bg-white  rounded-[20px] p-5 lg:p-0">
      <div className="w-full h-full px-2 lg:px-8   flex flex-col justify-between">
        {/* Upper Section */}
        <div className="  mt-2 lg:mt-4 font-[400px] text-[16px] lg:text-[22px]  leading-relaxed">
          <p className="">&apos;&apos;{content}&apos;&apos;</p>{" "}
        </div>

        {/* lower Section */}
        <div className="flex items-center gap-4  pb-3 ">
          <div className="flex justify-between  w-full ">
            <div className="text-xl font-semibold ">
              <p className=" text-[20px] lg:text-[24px]  font-semibold mb-2 lg:mb-0">{name}</p>
              <p className=" text-[14px] font-[400px] text-primary-300">
                MindMapper
              </p>
            </div>

            <div className="relative w-13.5 h-14.25  rounded-full overflow-hidden">
              <Image src={src} alt="Billy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
