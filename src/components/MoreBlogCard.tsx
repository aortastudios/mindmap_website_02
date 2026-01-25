import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";

const MoreBlogCard = () => {
  return (
    <div className=" h-111 flex-1 ">
      <div className="upper-div h-50 lg:h-[50%] w-full  rounded-[20px] relative">
        <Image src={"/images/wellness.png"} alt="Wellness_image" fill />
      </div>
      <div className="lower-div h-[50%] w-full  pt-10">
        <p className={`text-[14px] font-semibold text-[#6941C6]`}>
          Olivia Rhye • 1 Jan 2024
        </p>
        <p className=" flex items-center justify-between font-semibold text-base lg:text-[24px] text-primary-200 py-2">
          <span className="">
            Incorporating daily journaling 
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
          Daily journaling is one of the simplest ways to create space for
          self-reflection. It doesn’t require long entries or perfect words—just
          a few honest moments with your thoughts. By
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
  );
};

export default MoreBlogCard;
