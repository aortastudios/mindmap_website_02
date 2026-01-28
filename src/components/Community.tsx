import Image from "next/image";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Community = () => {
  return (
    <section className="max-w-360 mx-auto  h-230 lg:h-272.5 relative mb-0 lg:mb-14 ">
      <Container>
        <div className="w-full h-full pt-20">
          <div className="w-full lg:w-191.75 lg:h-35 mx-auto bricolage">
            <h1 className="font-bold  text-[24px] lg:text-[52px] text-center text-primary-100">
              Community
            </h1>
            <p className="text-primary-100 font-normal text-[16px] lg:text-[22px] text-center mt-4 px-0 lg:px-5">
              Connect with others, share experiences, and find encouragement in
              a safe, supportive space.
            </p>
          </div>

          <div className="mt-12  relative hidden lg:block items-center ">
            <Image
              src={"/images/community_img.png"}
              width={860}
              height={640}
              alt="coomunity_banner"
              className="mx-auto"
            />
            <Link href={'/career'} className="absolute top-1/2 right-[4%] h-13.5 w-13.5 bg-primary-100 flex items-center justify-center rounded-full">
              <FaArrowRightLong className="text-white w-5 h-[14.12px]" />
            </Link>
          </div>
          {/* mobile */}
          <div className=" relative lg:hidden block mt-10">
            <div className="px-10">
              <Image
                src={"/images/community_mobile.png"}
                width={864}
                height={649}
                alt="community_banner"
                className="w-216 h-162.5 object-contain"
              />
            </div>

            <Link href={'/career'} className="absolute top-1/2 right-0 w-7.5 h-7.5 bg-primary-100 flex items-center justify-center rounded-full">
              <FaArrowRightLong className="text-white  w-2.25 h-1.75" />
            </Link>
          </div>
          <div className="absolute  left-0 w-full top-0 h-10 bg-linear-to-t from-transparent to-[#FBF4EF] backdrop-blur-sm "></div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
