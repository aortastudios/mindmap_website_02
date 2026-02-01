export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
import Container from "./Container";
import NewsLetter from "./NewsLetter";
import BlogCard from "./BlogCard";
import MentalStateCard from "./MentalStateCard";
import { client, urlFor } from "@/lib/sanity";
import { BlogArticleCardProp } from "@/types/blogTypes";
import { formatDate } from "@/helpers/formatDate";

// Fetch blog
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
  title,
  publishedAt,
  "currentSlug" : slug.current,
  firstImage,
  author,
  firstImageDescription,
  tags

    
}
  `;

  const data = await client.fetch(query);
  return data;
}

const RecentBlogs = async () => {
  const blogData: BlogArticleCardProp[] = await getData();

  return (
    <section className="my-10 w-full h-full">
      <Container>
        <h1 className="latoclass font-semibold text-[24px] text-[#1A1A1A] mb-5">
          Recent blog posts
        </h1>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          {/* subscription section */}
          <NewsLetter />
          {/* right side with blog cards */}
          <div className="wrapper flex-1 flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-4 h-110">
            {blogData?.slice(0, 2).map((blog, idx) => (
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
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-10 ">
          <MentalStateCard
            src="/images/cognitive.png"
            text="Cognitive Wellness"
          />
          <MentalStateCard
            src="/images/regulation.png"
            text="Emotional Regulation"
          />
          <MentalStateCard src="/images/rest.png" text="Rest and Recovery" />
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogs;
