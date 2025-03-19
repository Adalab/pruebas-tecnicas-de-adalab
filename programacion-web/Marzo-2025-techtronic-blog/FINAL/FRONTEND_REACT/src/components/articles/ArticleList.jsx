import ArticleBrief from "./ArticleBrief";
import FeaturedArticleBrief from "./FeaturedArticleBrief";

function ArticleList() {
  return (
    <ol className="flex flex-col space-y-6">
      <li>
        <FeaturedArticleBrief />
      </li>
      <li>
        <ArticleBrief />
      </li>
    </ol>
  );
}

export default ArticleList;
