import Image from "next/image";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Community = () => {
  return (
    <section className="max-w-360 mx-auto  h-230 lg:h-272.5 relative ">
      <Container>
        <div className="w-full h-full pt-20">
          <div className="w-full lg:w-191.75 lg:h-35 mx-auto bricolage">
            <h1 className="font-bold  text-[24px] lg:text-[52px] text-center text-primary-100">
              Community
            </h1>
            <p className="text-primary-100 font-normal text-[16px] lg:text-[22px] text-center mt-4">
              Connect with others, share experiences, and find encouragement in
              a safe, supportive space.
            </p>
          </div>

          <div className="mt-12  relative hidden lg:block">
            <Image
              src={"/images/community_img.png"}
              width={1101}
              height={825}
              alt="coomunity_banner"
            />
            <button className="absolute top-1/2 right-[4%] h-13.5 w-13.5 bg-primary-100 flex items-center justify-center rounded-full">
              <FaArrowRightLong className="text-white w-5 h-[14.12px]" />
            </button>
          </div>
          {/* mobile */}
          <div className=" relative lg:hidden block mt-10">
            <div className="">
              <Image
                src={"/images/community_mobile.png"}
                width={900}
                height={649}
                alt="community_banner"
                className="w-216 h-162.5 object-contain"
              />
            </div>

            <button className="absolute top-1/2 right-0 w-7.5 h-7.5 bg-primary-100 flex items-center justify-center rounded-full">
              <FaArrowRightLong className="text-white  w-2.25 h-1.75" />
            </button>
          </div>
          <div className="absolute  left-0 w-full top-0 h-10 bg-linear-to-t from-transparent to-[#FBF4EF] backdrop-blur-sm "></div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
