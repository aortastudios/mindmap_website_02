import Image from "next/image";
import BlogCategoryTag from "./BlogCategoryTag";
import Container from "./Container";
import BlogCard from "./BlogCard";
import Controls from "./Controls";
import { IoArrowForwardSharp } from "react-icons/io5";
import { BlogArticleCardProp } from "@/types/blogTypes";
import Link from "next/link";
import { formatDate } from "@/helpers/formatDate";
import { urlFor } from "@/lib/sanity";

type Props = {
  articles: BlogArticleCardProp[];
};

const LatestEmotionalArticles = ({ articles }: Props) => {
  if (articles.length < 3) {
    return (
      <p className="max-w-310 mx-auto px-10 text-red-500 my-10">
        This section is coming soon!!!!
      </p>
    );
  }
  return (
    <div className="w-full h-full mb-10">
      <Container>
        <div className="w-full h-full">
          <h1 className=" font-bold lg:font-semibold text-[18px] lg:text-[26px] text-primary-100 mb-5">
            Latest Emotional Regulation articles
          </h1>
          <div className="w-full h-full xl:h-108  flex flex-col xl:flex-row gap-6">
            {articles.slice(0,1).map((article, index) => (
              <Link
                href={`/blog/${article.currentSlug}`}
                key={index}
                className=" h-full flex-1  "
              >
                <div className="upper-div h-50 sm:h-100  xl:h-50 w-full  rounded-[20px] overflow-hidden relative ">
                  <Image
                    src={urlFor(article.firstImage).url()}
                    alt="Wellness_image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lower-div h-[50%] w-full  pt-10">
                  <p className={`text-[14px] font-semibold text-[#6941C6]`}>
                    {article.author} • {formatDate(article.publishedAt)}
                  </p>
                  <p className=" flex items-center justify-between font-semibold text-base lg:text-[24px] text-primary-200 py-2">
                    <span className="line-clamp-1">{article.title}</span>{" "}
                    <IoArrowForwardSharp className="w-6 transform -rotate-45" />
                  </p>{" "}
                  <p className="line-clamp-2 text-[#667085] mb-2">
                    {article.firstImageDescription}
                  </p>
                  <div className="flex items-center gap-2 mt-3   ">
                    {article.tags.map((tag, index) => (
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
            ))}
            <div className=" h-full flex-1 ">
              <div className="wrapper flex-1 flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-4 h-full lg:h-110">
                {articles.slice(1,3).map((blog, idx) => (
                  <BlogCard
                    key={idx}
                    src={urlFor(blog.firstImage).url()}
                    text1={blog.tags[0]}
                    text2={blog.tags[1]}
                    bg1="bg-[#6941C6]/10"
                    bg2="bg-[#FDF2FA]"
                    textColor1="text-[#6941C6]"
                    textColor2="text-[#C11574]"
                    nameAndTime={formatDate(blog.publishedAt)}
                    slug={blog.currentSlug}
                    title={blog.title}
                    text={blog.firstImageDescription}
                    author={blog.author}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="w-full h-px bg-[#EAECF0]"></div>

            {/* Controls */}
            <Controls />
          </div>
        </div>
        {articles.slice(1, 2).map((article, index) => (
          <Link href={`/blog/${article.currentSlug}`}
            key={index}
            className="w-full h-full lg:h-76.5 lg:bg-white rounded-[20px] mt-4 flex lg:px-5 items-center flex-col lg:flex-row gap-4"
          >
            <div className=" h-48.25 sm:h-100 lg:h-61.5 w-full  lg:flex-1 flex items-center justify-center rounded-[20px] overflow-hidden relative">
              <Image
                src={urlFor(article.firstImage).url()}
                fill
                alt="Pattern_image"
                className=""
              />
            </div>
            <div className=" flex-1 ">
              <div className="lower-div h-61.5 w-full   ">
                <p className={`text-[14px] font-semibold text-primary-100`}>
                  {article.author} • {formatDate(article.publishedAt)}
                </p>
                <p className=" flex items-center justify-between font-semibold  text-base lg:text-[24px] text-primary-200 py-2">
                  <span className="line-clamp-1">{article.title}</span>{" "}
                  <IoArrowForwardSharp className="w-6 transform -rotate-45" />
                </p>{" "}
                <p className="line-clamp-5 text-base text-[#667085] pb-2">
                  {article.firstImageDescription}
                </p>
                <div className="flex items-center gap-2 mt-4 lg:mt-3   ">
                  {article.tags.map((tag, index) => (
                    <BlogCategoryTag
                      key={index}
                      text={tag}
                      bg={`${index === 0 ? "bg-[#6941C6]/10" : "bg-[#ECFDF3]"}`}
                      textColor={`${index === 1 ? "text-[#6941C6]" : "text-[#027A48]"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default LatestEmotionalArticles;
