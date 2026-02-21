export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import CategorySearch from "@/components/CategorySearch";
import Container from "@/components/Container";
import DynamicMoreBlog from "@/components/DymanicMoreBlog";
import DynamicLatestBlogCategory from "@/components/DynamicLatestBlogCategory";
import DynamicMentalState from "@/components/DynamicMentalState";
import Navbar from "@/components/Navbar";
import { client } from "@/lib/sanity";
import { BlogArticleCardProp } from "@/types/blogTypes";
import Link from "next/link";

// Fetch blog details
async function getBlogCategory(slug: string) {
  const query = `
*[_type == 'blog' && category == "${slug}"]{
  title,
  publishedAt,
  "currentSlug" : slug.current,
  firstImage,
  author,
  firstImageDescription,
  tags,
  category,
}
`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}
const BlogCategory = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const cleanedSlug = slug.replace(/%20/g, " ");
  const data: BlogArticleCardProp[] = await getBlogCategory(cleanedSlug);

  const categories = [
    "Cognitive Wellness",
    "Emotional Regulation",
    "Rest and Recovery",
  ];
  const filteredCategories = categories.filter(
    (category) => category !== cleanedSlug,
  );

 
  return (
    <main className="min-h-screen w-full overflow-hidden ">
      <Navbar />
      <Container>
        <div className=" w-full  h-full  mt-35 lg:mt-0 lg:pt-40 ">
          <div className="w-full   flex flex-col  gap-3 h-full">
            {/* Upper div */}
            <div className="w-full flex gap-3 ">
              <div className="flex-1 flex  flex-col xl:flex-row xl:items-center  gap-1 text-[22px] font-normal ">
                <Link href={"/blog"} className="text-primary-200/60 ">
                  Articles {">"}
                </Link>
                <p className="text-primary-100">{cleanedSlug}</p>
              </div>
            </div>

            <div className="w-full flex gap-3 ">
              <div className="flex-1 text-[22px] h-full font-normal mb-20">
                <div className="text-primary-100">
                  <h1 className=" text-[24px] lg:text-[52px] font-bold lg:font-semibold">
                    {data[0]?.category}
                  </h1>
                  <p className="text-[14px] lg:text-[22px]  font-[400px] lg:font-medium leading-5 lg:leading-8">
                    Browse expert articles designed to strengthen focus, improve
                    mental clarity, and support{" "}
                    <span className="lowercase">{cleanedSlug}</span>.
                  </p>
                </div>
                <div className="mt-10 ">
                  <CategorySearch
                    cleanedSlug={cleanedSlug}
                    
                  />
                </div>
              </div>
            </div>
            <DynamicLatestBlogCategory articles={data} />
          </div>
        </div>
        <div className="w-full pt-5">
          <DynamicMoreBlog
            title={`More articles on ${cleanedSlug}`}
            slug={cleanedSlug}
          />
        </div>
        <div className="w-full mt-10">
          <h1 className=" font-bold lg:font-semibold text-[24px] lg:text-[26px] text-primary-100 mb-5">
            Explore other categories
          </h1>
          <DynamicMentalState categories={filteredCategories} />
        </div>
      </Container>
    </main>
  );
};

export default BlogCategory;
