import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import React from "react";

const BlogArticle = () => {
  return (
    <main className="min-h-screen w-full ">
      <Navbar />
      <Container>
        <div className=" w-full  h-full  mt-35 lg:mt-0 lg:pt-40 ">
          <div className="flex items-center justify-center gap-1 text-[22px] font-normal">
            <p className="text-primary-200/60 ">
              Articles {">"} Cognitive Wellness {">"}
            </p>
            <p className="text-primary-100">
              Practicing mindfulness for clarity and focus
            </p>
          </div>
          <div className="w-[90%]  bg-green-500 h-full"></div>
        </div>
      </Container>
    </main>
  );
};

export default BlogArticle;
