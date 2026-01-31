import BlogSearch from "@/components/BlogSearch";
import LatestArticles from "@/components/LatestArticles";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";



const Blog = async () => {
 
  return (
    <main className="blog w-full h-full    min-h-screen  overflow-hidden">
      <Navbar />
      <BlogSearch />
      <RecentBlogs />
      <LatestArticles />
    </main>
  );
};

export default Blog;
