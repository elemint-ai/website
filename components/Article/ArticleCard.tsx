import React from "react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleMeta } from "../../interfaces/article";
import styles from "../../styles/css/article-card.module.css";
import PropTypes from "prop-types";

interface IProps {
  article: ArticleMeta;
}

const ArticleCard: FunctionComponent<IProps> = ({ article }) => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className={styles["article-card"]}>
        <img src={article.thumbnail} />
        <div className={styles.info}>
          <h1>{article.title}</h1>
          <p>{article.date.toDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.any,
};

export default ArticleCard;
