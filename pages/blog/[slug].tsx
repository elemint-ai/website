import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { ArticleInfo } from "../../interfaces/article";
import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import path from "path";

// import { reporter } from "vfile-reporter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import parse from "html-react-parser";

import guide from "remark-preset-lint-markdown-style-guide";
import report from "vfile-reporter";

import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";

const dashboardRoutes: any = [];

import { container, title } from "styles/jss/nextjs-material-kit";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  container,
  title,
  main: {
    background: "#F6F5EC",
    position: "relative",
    zIndex: 3,
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
}));

interface IProps {
  article: ArticleInfo;
}

const Article: FunctionComponent<IProps> = ({ article }) => {
  const classes = useStyles();
  const { meta, body } = article;
  return (
    <div>
      <Header
        color="white"
        /* 
        // @ts-ignore */
        routes={dashboardRoutes}
        brand="Elemint"
        rightLinks={<HeaderLinks />}
        fixed
        // changeColorOnScroll={{
        //   height: 0,
        //   color: "white",
        // }}
        // {...rest}
      />
      <Toolbar />
      <div
        className={(classes.main, classes.mainRaised)}
        style={{ backgroundImage: "/img/profile-bg.jpg" }}
      >
        <Toolbar />
        <div className={classes.container}>
          <Typography variant="h6" gutterBottom>
            {meta.title} {meta.date.toDateString()}
          </Typography>
          <Divider />
          <div className={classes.markdown}>
            <img src={meta.thumbnail} />
            <div className={classes.markdown}>
              <h1>{meta.title}</h1>
              <p>{meta.date.toDateString()}</p>
            </div>
            <div>{parse(body)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.any,
};

export default Article;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const files = fs.readdirSync("content/blog");

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.slug
  const fullPath = path.join("content/blog", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const contentHtml = await remark()
    .use(guide)
    .use(remarkHtml)
    .process(matterResult.content)
    .then((file) => {
      console.error(report(file as any));
      return String(file);
    });

  return {
    props: {
      article: {
        body: contentHtml,
        meta: {
          ...matterResult.data,
        },
      },
    },
  };
}
