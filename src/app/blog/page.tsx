import BlogSearch from "@/components/BlogSearch";
import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <main className="blog w-full h-full    min-h-screen  overflow-hidden">
      <Navbar />
      <BlogSearch />
    </main>
  );
};

export default Blog;
