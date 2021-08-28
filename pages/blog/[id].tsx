import { client } from "../../libs/client";
import PostDetailemplate from "../../src/components/templates/PostDetailemplate";

export default function PostDetailPage({ post }: any) {
  return <PostDetailemplate post={post} />;
}

/**
 * 静的生成のためのパスを作成
 */
export const getStaticPaths = async () => {
  const blogList: any = await client.get({ endpoint: "blog" });

  let paths = [];
  for (let content of blogList.contents) {
    paths.push({ params: { id: content.id } });
  }

  return { paths, fallback: false };
};

/**
 * ブログ記事を取得し、テンプレートへ受け渡す
 */
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const post = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      post: post,
    },
  };
};
