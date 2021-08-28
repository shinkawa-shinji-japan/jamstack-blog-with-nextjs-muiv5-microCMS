import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PostItem from "../molecules/PostItem";
import { PostItemProps } from "../molecules/PostItem";
// import PostItemProps from "../molecules/PostItem";

interface MainHomeProps {
  posts: ReadonlyArray<PostItemProps>;
  title: string;
  category?: string;
}

export default function MainHome(props: MainHomeProps) {
  const { posts, title, category } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {category && "[" + category + "]に関する"}
        {title}
      </Typography>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Grid container spacing={4}>
        {posts.map((post: any) => (
          <PostItem key={post.title} post={post} />
        ))}
      </Grid>
    </Grid>
  );
}
