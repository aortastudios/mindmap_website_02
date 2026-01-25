import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";
import Container from "./Container";
import BlogCard from "./BlogCard";
import Controls from "./Controls";

const LatestEmotionalArticles = () => {
  return (
    <div className="w-full h-full mb-10">
      <Container>
        <div className="w-full h-full">
          <h1 className=" font-bold lg:font-semibold text-[24px] lg:text-[26px] text-primary-100 mb-5">
            Latest Emotional Regulation articles
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

            {/* Controls */}
            <Controls />
          </div>
        </div>
        <div className="w-full h-full lg:h-76.5 lg:bg-white rounded-[20px] mt-4 flex lg:px-5 items-center flex-col lg:flex-row gap-4">
          <div className=" h-48.25 lg:h-61.5 w-full  lg:flex-1 flex items-center justify-center rounded-[20px] relative">
            <Image src={"/images/pattern.png"} fill alt="Pattern_image" />
          </div>
          <div className=" flex-1 ">
            <div className="lower-div h-61.5 w-full   ">
              <p className={`text-[14px] font-semibold text-primary-100`}>
                Olivia Rhye • 1 Jan 2024
              </p>
              <p className=" flex items-center justify-between font-semibold  text-base lg:text-[24px] text-primary-200 py-2">
                <span className="">Understanding Your Emotional Patterns</span>{" "}
                <Image
                  src={"/icons/icon_wrap.png"}
                  width={24}
                  height={28}
                  alt="forward icon"
                  className="w-6"
                />
              </p>{" "}
              <p className="line-clamp-5 text-base text-[#667085] pb-2">
                Emotions often follow patterns we don’t notice until we pause to
                reflect. By paying attention to recurring feelings and triggers,
                you gain insight into your emotional responses and learn how to
                navigate them with more intention and control.Writing gives
                emotions a place to land. When thoughts are expressed on the
                page,
              </p>
              <div className="flex items-center gap-2 mt-4 lg:mt-3   ">
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestEmotionalArticles;
