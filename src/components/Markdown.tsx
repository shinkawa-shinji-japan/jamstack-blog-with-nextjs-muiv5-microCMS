import * as React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import copy from "copy-to-clipboard";

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const CodeHighlighter = (props: any) => {
  const { className } = props;
  let language = "javascript";
  // fileName;
  if (className) {
    const suffix = "lang-";
    const startPoint = suffix.length;
    const colon = className.indexOf(":");

    /*
     * [1] classNameに":"がある場合はfileNameとlanguageを取得する。
     * [2] classNameに":"がない場合はlanguageのみ取得する。
     */
    if (colon !== -1) {
      // [1]
      language = className.substring(startPoint, colon);
      // fileName = className.substring(startPoint + language.length + 1);
    } else {
      // [2]
      language = className.substring(startPoint);
    }
  }

  return (
    <SyntaxHighlighter
      style={a11yDark}
      language={language}
      PreTag="div"
      onClick={() => {
        copy(props.children);
      }}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
    code: CodeHighlighter,
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
