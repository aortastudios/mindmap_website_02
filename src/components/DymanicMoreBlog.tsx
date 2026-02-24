export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
import Container from "./Container";
import MoreBlogCard from "./MoreBlogCard";
import Controls from "./Controls";
import { BlogArticleCardProp } from "@/types/blogTypes";
import { client } from "@/lib/sanity";

// Fetch blog
async function getData(slug: string) {
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

const DynamicMoreBlog = async ({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) => {
  const cleanedSlug = slug.replace(/%20/g, " ");

  const blogData: BlogArticleCardProp[] = await getData(cleanedSlug);

  if (blogData.length < 3) {
    return (
      <p className="max-w-310 mx-auto px-10 text-red-500 my-10">
        This section is coming soon!!!!
      </p>
    );
  }

  return (
    <div className="w-full h-full">
      <Container>
        <div className="w-full h-full">
          <h1 className=" font-bold lg:font-semibold text-[18px] lg:text-[26px] text-primary-100 mb-5">
            {title}
          </h1>
          <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData?.map((blog, index) => (
              <MoreBlogCard key={index} {...blog} />
            ))}
          </div>{" "}
          <div className="w-full h-px bg-[#EAECF0]"></div>
          <Controls />
        </div>
      </Container>
    </div>
  );
};

export default DynamicMoreBlog;
