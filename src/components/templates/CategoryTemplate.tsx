import * as React from "react";
import Template from "./Template";
import MainPostList from "../organisms/MainPostList";

export default function CategoryTemplate(props: any) {
  const { mainFeaturedPost, featuredPosts, posts, category } = props;

  return (
    <Template mainFeaturedPost={mainFeaturedPost} featuredPosts={featuredPosts}>
      <MainPostList title="記事一覧" posts={posts} category={category} />
    </Template>
  );
}
