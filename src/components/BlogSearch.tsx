import Image from "next/image";
import Container from "./Container";

const BlogSearch = () => {
  return (
    <section className="w-full h-full mt-4  pt-40 lg:pt-0">
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
          <div className="max-w-294.5 h-16  flex items-center border border-primary-100 rounded-full overflow-hidden">
            <div className=" flex justify-center items-center  w-10 h-5 lg:w-15 lg:h-10 ">
              <Image
                src={"/icons/search.png"}
                alt="Search_icon"
                width={18}
                height={18}
                className=""
              />
            </div>
            <div className=" w-full h-full flex-1">
              <input
                type="text"
                className="w-full h-full outline-none placeholder:text-primary-100"
                placeholder="search for articles"
              />
            </div>
            <button className="    h-full w-[25%] lg:w-[13%] flex items-center justify-center    bg-primary-100  text-[#ffffff] text-[14px] lg:text-[20px] font-medium">
              Search
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSearch;
