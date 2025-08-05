// ! Change status to only certain values later on
export interface Lecon {
  id: string;
  title: string;
  type: string;
  category: string;
  application: string;
  levels: { level: string; subLevel: string }[];
  href: string;
  links: { title: string; href: string }[];
  downloadRef: string;
  status: string;
  content: string;
}

/* #if going for baseLesson with TDs tp etc


export interface BaseLesson {
  title: string;
  application?: string;
  levels: { level: string; subLevel?: string }[];
  href: string;
  downloadRef: string;
  category?: string;
}


export interface Cours extends BaseLesson {
  links: { title: string; href: string }[];
  type: string;
}

export interface TD extends BaseLesson {
  exercises?: number;
} */
