import * as React from "react";
import Template from "./Template";
import MainPostDetail from "../organisms/MainPostDetail";
import { postObject } from "../organisms/MainPostDetail";

interface PostDetailemplateProps {
  post: postObject;
}

export default function PostDetailemplate(props: PostDetailemplateProps) {
  const { post } = props;

  return (
    <Template>
      <MainPostDetail post={post} />
    </Template>
  );
}
