import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";
import Container from "./Container";
import BlogCard from "./BlogCard";
import Controls from "./Controls";

const LatestCognitiveArticles = () => {
  return (
    <div className="w-full h-full mb-10">
      <Container>
        <div className="w-full h-full">
          <h1 className=" font-bold lg:font-semibold text-[24px] lg:text-[26px] text-primary-100 mb-5">
            Latest Cognitive Wellness articles
          </h1>
          <div className="w-full h-full lg:h-108  flex flex-col lg:flex-row gap-6">
            <div className=" h-full flex-1 ">
              <div className="upper-div h-50 lg:h-[50%] w-full  rounded-[20px] relative">
                <Image src={"/images/wellness.png"} alt="Wellness_image" fill />
              </div>
              <div className="lower-div h-[50%] w-full  pt-10">
                <p className={`text-[14px] font-semibold text-[#6941C6]`}>
                  Olivia Rhye • 1 Jan 2024
                </p>
                <p className=" flex items-center justify-between font-semibold text-[24px] text-primary-200 py-2">
                  <span className="">
                    Incorporating daily journaling for self reflection
                  </span>{" "}
                  <Image
                    src={"/icons/icon_wrap.png"}
                    width={24}
                    height={28}
                    alt="forward icon"
                    className="w-6"
                  />
                </p>{" "}
                <p className="line-clamp-2 text-[#667085] pb-2">
                  Daily journaling is one of the simplest ways to create space
                  for self-reflection. It doesn’t require long entries or
                  perfect words—just a few honest moments with your thoughts. By
                </p>
                <div className="flex items-center gap-2 mt-3   ">
                  <BlogCategoryTag
                    text={"Wellness"}
                    bg={"bg-[#6941C6]/10"}
                    textColor={"text-[#6941C6]"}
                  />
                  <BlogCategoryTag
                    text={"Mindfulness"}
                    bg={"bg-[#ECFDF3]"}
                    textColor={"text-[#027A48]"}
                  />
                  <BlogCategoryTag
                    text={"Mental Health"}
                    bg={"bg-[#FDF2FA]"}
                    textColor={"text-[#C11574]"}
                  />
                </div>
              </div>
            </div>
            <div className=" h-full flex-1 ">
              <div className="wrapper flex-1 flex flex-col gap-6 lg:gap-4 h-full lg:h-110">
                <BlogCard
                  src="/images/clarity.png"
                  text1="Wellness"
                  bg1="bg-[#6941C6]/10"
                  textColor1="text-[#6941C6]"
                  text2="Mental Health"
                  bg2="bg-[#FDF2FA]"
                  textColor2="text-[#C11574]"
                  nameAndTime="Phoenix Baker • 1 Jan 2023"
                  title="Finding Clarity in Quiet Moments"
                  text="Taking a few quiet moments each day allows your mind to settle and your thoughts to surface naturally. In stillness, you begin to notice what truly needs attention—e"
                />
                <BlogCard
                  src="/images/patterns.png"
                  text1="Mindfulness"
                  bg1="bg-[#ECFDF3]"
                  textColor1="text-[#027A48]"
                  text2="Mental Health"
                  bg2="bg-[#FDF2FA]"
                  textColor2="text-[#C11574]"
                  nameAndTime="Lana Steiner • 1 Jan 2023"
                  title="Understanding Your Emotional Patterns"
                  text="Emotions often follow patterns we don’t notice until we pause to reflect. By paying attention to recurring feelings and triggers, you gain insight into your emoti"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="w-full h-px bg-[#EAECF0]"></div>
            <div className="w-full flex items-center justify-between gap-3 mt-5">
              <Controls />
              <div className="flex gap-0.5 text-[#667085] pt-5">
                <span className="w-10 h-10 font-medium  text-[12px] lg:text-[14px] bg-[#F9F5FF] text-[#7F56D9]">
                  1
                </span>
                <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
                  2
                </span>
                <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
                  3
                </span>
                <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
                  ...
                </span>
                <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
                  8
                </span>
                <span className="w-10 h-10 font-medium text-[14px] hidden lg:block">
                  9
                </span>
                <span className="w-10 h-10 font-medium text-[12px] lg:text-[14px]">
                  10
                </span>
              </div>
              <div className="flex items-center">
                <Image
                  src={"/icons/next.png"}
                  width={82}
                  height={20}
                  alt="next_button"
                  className="w-18.5 h-5 lg:w-20.5 lg:h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestCognitiveArticles;
