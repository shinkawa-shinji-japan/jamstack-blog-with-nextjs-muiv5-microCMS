import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useRouter } from "next/router";

export interface PostItemProps {
  post: {
    date: string;
    description: string;
    image: string;
    featuredImage: any;
    imageLabel: string;
    title: string;
    id: string;
  };
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;
  const router = useRouter();

  return (
    <Grid item xs={12}>
      <CardActionArea
        component="a"
        onClick={() => {
          router.push(`/blog/${post.id}`);
        }}
      >
        <Card sx={{ display: "flex", height: 136 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
              objectFit: "cover",
            }}
            image={post.featuredImage.url}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
