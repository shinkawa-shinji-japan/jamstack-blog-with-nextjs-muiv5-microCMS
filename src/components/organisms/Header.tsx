import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {/*
             basePath を利用する場合は、リンク系はnext/linkかnext/routerを使わないと行けない。→ つまりmuiのlinkは使わないこと！
             https://nextjs.org/docs/api-reference/next.config.js/basepath

             NextLinkのpassHref は重要
           * https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
           */}
          <NextLink href="/" passHref>
            <MuiLink underline="hover">{title}</MuiLink>
          </NextLink>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <NextLink key={section.title} href={`/${section.url}`} passHref>
            <MuiLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </MuiLink>
          </NextLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
