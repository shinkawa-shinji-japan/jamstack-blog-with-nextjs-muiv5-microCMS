import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useRouter } from "next/router";

interface FeaturedPostProps {
  post: {
    id: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    linkText: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;
  const router = useRouter();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="a"
        onClick={() => {
          router.push(`/blog/${post.id}`);
        }}
      >
        <Card sx={{ display: "flex", height: 160 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description.substring(0, 30)}
            </Typography>
            <Typography variant="subtitle1" color="primary"></Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
