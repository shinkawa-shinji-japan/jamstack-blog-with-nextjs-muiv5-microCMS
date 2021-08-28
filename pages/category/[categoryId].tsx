import { client } from "../../libs/client";
import CategoryTemplate from "../../src/components/templates/CategoryTemplate";

export default function CategoryFilteredPage({ posts, category }: any) {
  return <CategoryTemplate posts={posts} category={category} />;
}

// 静的生成のためのパスを作成
export const getStaticPaths = async () => {
  const categoryList: any = await client.get({ endpoint: "category" });

  let paths = [];
  for (let content of categoryList.contents) {
    paths.push({ params: { categoryId: content.id } });
  }

  return { paths, fallback: false };
};

// カテゴリーに紐づいている記事一覧を取得し、テンプレートへ受け渡す
export const getStaticProps = async (context: any) => {
  const category = context.params.categoryId;

  const blogFilterByCategory: any = await client.get({
    endpoint: "blog",
    queries: { filters: `category[contains]${category}` },
  });

  return {
    props: {
      posts: blogFilterByCategory.contents,
      category: category,
    },
  };
};
