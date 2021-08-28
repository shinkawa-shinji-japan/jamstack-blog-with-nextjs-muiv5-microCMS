import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{ color: "secondary.light" }}
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://paths-are.com/">
        Paths-are パスア Shinkawa Shinji
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      color="secondary.main"
      sx={{ bgcolor: "#20232a", mt: 2, py: 6 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          sx={{ color: "secondary.light" }}
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
