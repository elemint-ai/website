import React from "react";
import styles from "../styles/css/article-card.module.css";
import ArticleCard from "../components/Article/ArticleCard";
import fs from "fs";
import matter from "gray-matter";
import { ArticleMeta } from "../interfaces/article";
import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";

const dashboardRoutes: any = [];

import { container } from "styles/jss/nextjs-material-kit";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  container,
}));

interface IProps {
  articles: ArticleMeta[];
}

const Blog: FunctionComponent<IProps> = ({ articles }) => {
  const classes = useStyles();
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
      <div className={classes.container}>
        <div className={styles.container}>
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

Blog.propTypes = {
  articles: PropTypes.any,
};

export async function getStaticProps() {
  const files = fs.readdirSync("content/blog");

  const articles = files.map((file) => {
    const data = fs.readFileSync(`content/blog/${file}`).toString();

    return {
      ...matter(data).data,
      slug: file.split(".")[0],
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
}

export default Blog;
