import BlogSearch from "@/components/BlogSearch";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";

const Blog = () => {
  return (
    <main className="blog w-full h-full    min-h-screen  overflow-hidden">
      <Navbar />
      <BlogSearch />
      <RecentBlogs />
    </main>
  );
};

export default Blog;
