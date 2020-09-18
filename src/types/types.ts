export type Card = {
  cardTitle: string;
  cardSubtitle: string;
  cardStack: string;
  link: string;
  imgSrc?: string;
};

export type BlogPost = {
  title: string;
  date: string;
  keywords: string;
  summary: string;
};

export type OSSCard = {
  node: {
    title: string;
    description: string;
    stack: string;
    link: string;
    id: string;
    image?: string;
  };
};
