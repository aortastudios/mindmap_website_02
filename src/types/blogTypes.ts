export interface BlogCardProp {
  text1?: string;
  bg1?: string;
  textColor1?: string;
  text2?: string;
  bg2?: string;
  textColor2?: string;
  nameAndTime: string;
  title: string;
  text: string;
  src: string;
  slug: string;
  author: string;
}

export interface BlogArticleCardProp {
  author: string;
  currentSlug: string;
  firstImage: React.ReactNode;
  firstImageDescription: string;
  publishedAt: string; // ISO date string
  tags: string[];
  title: string;
  src: string;
  category?: string;
  href?: string;
}

export interface BlogCategoryProp {
  text1?: string;
  bg1?: string;
  textColor1?: string;
  text2?: string;
  bg2?: string;
  textColor2?: string;
}

export interface blogArticleDetailProp {
  title: string;
  publishedAt: string;
  author: string;
  firstImage: React.ReactNode;
  secondImage: React.ReactNode;
  firstImageDescription: string;
  secondImageDescription: string;
  category: string;
  firstQuestion: string;
  secondQuestion: string;
  thirdQuestion: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  firstContent: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  secondContent: any;
  tags: string[];
}
