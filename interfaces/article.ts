interface ArticleMeta {
  slug: string;
  title: string;
  date: Date;
  thumbnail: string;
}

interface ArticleInfo {
  meta: ArticleMeta;
  body: string;
}

export type { ArticleMeta, ArticleInfo };
