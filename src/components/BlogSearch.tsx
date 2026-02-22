
import Container from "./Container";
import BlogSearchForm from "./BlogSearchForm";

const BlogSearch = () => {
  return (
    <section className="w-full h-full mt-4  pt-30">
      <Container>
        <div className="text-primary-100">
          <h1 className=" text-[24px] lg:text-[52px] font-bold lg:font-semibold">
            Blogs
          </h1>
          <p className="text-[14px] lg:text-[22px]  font-[400px] lg:font-medium leading-5 lg:leading-8">
            Mindful blog. Browse hundreds of articles designed to educate and
            inspire. Whatever your mood or goal, feel free to explore our expert
            articles on meditation, wellness, and mental health
          </p>
        </div>
        <div className="mt-10 ">
          <BlogSearchForm />
        </div>
      </Container>
    </section>
  );
};

export default BlogSearch;
