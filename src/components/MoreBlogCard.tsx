import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";
import { IoArrowForwardSharp } from "react-icons/io5";
import { BlogArticleCardProp } from "@/types/blogTypes";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/helpers/formatDate";

const MoreBlogCard = ({
  title,
  publishedAt,
  currentSlug,
  author,
  firstImageDescription,
  tags,
  firstImage,
}: BlogArticleCardProp) => {
  return (
    <Link href={`/blog/${currentSlug}`} className=" h-111 flex-1 ">
      <div className="upper-div h-50 lg:h-[50%] w-full  rounded-[20px] relative">
        <Image src={urlFor(firstImage).url()} alt="Wellness_image" fill />
      </div>
      <div className="lower-div h-[50%] w-full  pt-10">
        <p className={`text-[14px] font-semibold text-[#6941C6]`}>
          {author} • {formatDate(publishedAt)}
        </p>
        <p className=" flex items-center justify-between font-semibold text-base lg:text-[24px] text-primary-200 py-2">
          <span className="line-clamp-1">{title}</span>{" "}
          <IoArrowForwardSharp className="w-6 transform -rotate-45" />
        </p>{" "}
        <p className="line-clamp-2 text-[#667085] mb-2">
          {firstImageDescription}
        </p>
        <div className="flex items-center gap-2 mt-3">
          {tags.map((tag, index) => (
            <BlogCategoryTag
              key={index}
              text={tag}
              bg={`${index === 0 ? "bg-[#6941C6]/10" : "bg-[#ECFDF3]"}`}
              textColor={`${index === 1 ? "text-[#6941C6]" : "text-[#027A48]"}`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MoreBlogCard;

