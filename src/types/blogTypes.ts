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
}

export interface BlogArticleCardProp{
  author: string;
  currentSlug: string;
  firstImage: React.ReactNode;
  firstImageDescription: string;
  publishedAt: string; // ISO date string
  tags: string[];
  title: string;
}

export interface BlogCategoryProp {
  text1?: string;
  bg1?: string;
  textColor1?: string;
  text2?: string;
  bg2?: string;
  textColor2?: string;
}
