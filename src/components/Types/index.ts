// tslint:disable-next-line: interface-over-type-literal
export type project = {
  id: number;
  name: string;
  image: string; // image file name
  description: string;
  link: string;
  tools: string[];
  concept: string;
  longDescription: string;
  videoUrl: string; // url
};

export type oss = {
  id: number;
  title: string;
  link: string;
  description: string;
  tools: string[];
};

export type MyLink = {
  id: number;
  type: string;
  link: string;
};

export type Skill = {
  id: number;
  skill: string;
};
