import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";
import type { BlogCardProp } from "@/types/blogTypes";
import Link from "next/link";

const BlogCard = ({
  text1,
  bg1,
  textColor1,
  text2,
  bg2,
  textColor2,
  nameAndTime,
  title,
  text,
  src,
}: BlogCardProp) => {
  return (
    <Link
      href={"/blog/blog-details"}
      className="w- h-full lg:h-50 flex flex-col lg:flex-row gap-4"
    >
      <div className="w-full h-50 lg:w-80 lg:h-full  rounded-[20px] relative">
        <Image src={src} fill alt="image" />
      </div>
      <div className=" flex-1">
        <p className="text-primary-100 text-[12px] lg:text-[14px] font-semibold">
          {nameAndTime}
        </p>
        <p className="mt-2 text-primary-200 font-bold text-base lg:text-lg">
          {title}
        </p>
        <p className=" text-[14px] lg:text-[16px] font-[400px] text-[#667085] leading-6 line-clamp-2">
          {text}
        </p>
        <div className="flex items-center gap-4 mt-3  lg:my-5 ">
          {text1 && (
            <BlogCategoryTag text={text1} bg={bg1!} textColor={textColor1!} />
          )}
          {text2 && (
            <BlogCategoryTag text={text2} bg={bg2!} textColor={textColor2!} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
