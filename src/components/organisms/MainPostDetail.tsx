import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export interface postObject {
  title: string;
  body?: string;
}

interface MainPostDetailProps {
  post: postObject;
}

export default function MainPostDetail(props: MainPostDetailProps) {
  const { post } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Divider />

      <div
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </Grid>
  );
}
