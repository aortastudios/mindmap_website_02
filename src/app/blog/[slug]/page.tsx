export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import Container from "@/components/Container";
import MoreBlogs from "@/components/MoreBlogs";
import Navbar from "@/components/Navbar";
import { formatDate } from "@/helpers/formatDate";
import { client, urlFor } from "@/lib/sanity";
import { blogArticleDetailProp } from "@/types/blogTypes";
import { main } from "framer-motion/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

// Fetch blog details
async function getBlogDetails(slug: string) {
  const query = `
*[_type == 'blog' && slug.current == "${slug}"]{
  title,
  publishedAt,
  author,
  firstImage,
  secondImage,
  firstImageDescription,
  secondImageDescription,
  category,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  firstContent,
  secondContent,
  tags
}[0]
`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}
const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data: blogArticleDetailProp = await getBlogDetails(slug);
  

  if (data === null) {
    return (
      <main className="min-h-screen w-full">
        <Navbar />
        <Container>
          <p className="text-center text-red-600 mt-35 lg:mt-0 lg:pt-40">
            Article not found
          </p>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full ">
      <Navbar />
      <Container>
        <div className=" w-full  h-full  mt-35 lg:mt-0 lg:pt-40 ">
          <div className="w-full xl:w-[90%]  flex flex-col  gap-3 h-full">
            {/* Upper div */}
            <div className="w-full flex gap-3 ">
              <div className="hidden xl:block w-[25%] "></div>
              <div className="flex-1 flex  flex-col xl:flex-row xl:items-center  gap-1 text-[22px] font-normal ">
                <p className="text-primary-200/60 ">
                  <Link href={"/blog"}>Articles</Link> {">"}
                  <Link href={`/category/${data.category}`}>
                    {data.category}
                  </Link>
                  {">"}
                </p>
                <p className="text-primary-100">{data.title}</p>
              </div>
            </div>

            <div className="w-full flex gap-3 ">
              {/* left side (article) */}
              {/* for desktop */}
              <div className="w-[25%]  hidden xl:block ">
                <div className="max-w-60.75 pr-5  text-primary-200 text-lg font-normal">
                  <p className="mb-12">In this article</p>
                  <p className="mb-3">{data.firstQuestion}</p>
                  <p className="mb-3">{data.secondQuestion}</p>
                  <p className="mb-3">{data.thirdQuestion}</p>
                </div>
              </div>
              {/* right with articles */}
              <div className="flex-1 text-[22px] h-full font-normal mb-20">
                <h1 className=" text-[20px] lg:text-[36px] font-bold lg:font-semibold text-primary-100 ">
                  {data.title}
                </h1>
                <div className="flex items-center gap-5 my-2">
                  <div className="flex items-center gap-2">
                    <p className="">
                      <Image
                        src={"/icons/person.png"}
                        width={28}
                        height={28}
                        alt="image_placeholder"
                        className=""
                      />
                    </p>
                    <p className="font-medium text-[14px] text-[#535353]">
                      By {data.author}
                    </p>
                  </div>
                  <p className="text-[14px] font-normal text-[#535353]">
                    {formatDate(data.publishedAt)}
                  </p>
                </div>
                {/* for mobile */}
                <div className="w-full xl:hidden  text-primary-200 text-lg font-normal my-10">
                  <p className="mb-3">In this article</p>
                  <p className="mb-3">{data.firstQuestion}</p>
                  <p className="mb-3">{data.secondQuestion}</p>
                  <p className="mb-3">{data.thirdQuestion}</p>
                </div>
                <div className="mt-4 rounded-[20px] overflow-hidden">
                  <Image
                    src={urlFor(data?.firstImage).url()}
                    alt="mind_image"
                    width={462}
                    height={308}
                    className=" h-auto w-full lg:h-77 xl:h-115.5 "
                  />
                </div>
                <p className="leading-8 text-[20px] font-normal text-primary-100 mt-3">
                  {data.firstImageDescription}
                </p>
                <div className="my-4 leading-8 prose prose-blue prose-lg prose-headings:underline ">
                  <PortableText value={data.firstContent} />
                </div>
                <p className="p-5 bg-primary-100/10  text-primary-100 rounded-[20px] text-base lg:text-[24px] leadin-8 font-normal my-6">
                  {data.secondImageDescription}
                </p>

                <div className="mt-4 rounded-[20px] overflow-hidden">
                  <Image
                    src={urlFor(data?.secondImage).url()}
                    alt="mind_image"
                    width={462}
                    height={308}
                    className=" h-auto w-full lg:h-77 xl:h-115.5"
                  />
                </div>
                <div className="my-4 leading-8 prose prose-blue prose-lg prose-headings:underline ">
                  <PortableText value={data.firstContent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="blog-article">
        <Container>
          <div className="w-full pt-5">
            <MoreBlogs title=" Blog Posts You Might Like" />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default BlogArticle;
