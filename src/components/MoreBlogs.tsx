import Container from "./Container";

import MoreBlogCard from "./MoreBlogCard";
import Controls from "./Controls";

const MoreBlogs = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full">
      <Container>
        <div className="w-full h-full">
          <h1 className=" font-bold lg:font-semibold text-[24px] lg:text-[26px] text-primary-100 mb-5">
            {title}
          </h1>
          <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MoreBlogCard />
            <MoreBlogCard />
            <MoreBlogCard />
            <MoreBlogCard />
            <MoreBlogCard />
            <MoreBlogCard />
          </div>{" "}
          <div className="w-full h-px bg-[#EAECF0]"></div>
          <Controls />
        </div>
      </Container>
    </div>
  );
};

export default MoreBlogs;
