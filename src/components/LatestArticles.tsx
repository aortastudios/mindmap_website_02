import LatestCognitiveArticles from "./LatestCognitiveArticles";
import LatestEmotionalArticles from "./LatestEmotionalArticles";
import LatestRecoveryArticle from "./LatestRecoveryArticle";
import MoreBlogs from "./MoreBlogs";

const LatestArticles = () => {
  return (
    <section className="w-full h-full">
      <LatestCognitiveArticles />
      <LatestEmotionalArticles />
      <LatestRecoveryArticle />
      <MoreBlogs />
    </section>
  );
};

export default LatestArticles;
