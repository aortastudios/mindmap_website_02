import { client } from "@/lib/sanity";
import LatestCognitiveArticles from "./LatestCognitiveArticles";
import LatestEmotionalArticles from "./LatestEmotionalArticles";
import LatestRecoveryArticle from "./LatestRecoveryArticle";
import MoreBlogs from "./MoreBlogs";
import { BlogArticleCardProp } from "@/types/blogTypes";

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
  tags,
  category,

    
}
  `;

  const data = await client.fetch(query);
  return data;
}
const LatestArticles = async () => {
  const blogData: BlogArticleCardProp[] = await getData();
  

  // Filter by category
  const cognitiveArticles = blogData.filter(
    (article) => article.category === "Cognitive Wellness",
  );
  const emotionalArticles = blogData.filter(
    (article) => article.category === "Emotional Regulation",
  );
  const recoveryArticles = blogData.filter(
    (article) => article.category === "Rest and Recovery",
  );
  return (
    <section className="w-full h-full">
      <LatestCognitiveArticles articles={cognitiveArticles} />
      <LatestEmotionalArticles articles={emotionalArticles} />
      <LatestRecoveryArticle articles={recoveryArticles} />
      <MoreBlogs title=" More Blog Posts" />
    </section>
  );
};

export default LatestArticles;
