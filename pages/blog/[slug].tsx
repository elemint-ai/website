import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { ArticleInfo } from "../../interfaces/article";
import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import path from "path";

import { reporter } from "vfile-reporter";
import { remark } from "remark";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import remark2react from "remark-react";

import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const dashboardRoutes: any = [];

import { container, title } from "styles/jss/nextjs-material-kit";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  container,
  title,
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
          <div>{body}</div>
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
    .use(remarkPresetLintRecommended)
    .use(remarkHtml)
    .use(remark2react)
    .process(matterResult.content)
    .then((file) => {
      console.error(reporter(file as any));
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
