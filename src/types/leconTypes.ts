// ! Change status to only certain values later on

// Ce type représente chaque page/section cliquable dans le SideMenu.
export interface LeconPageNode {
  slug: string; // Le segment d'URL
  title: string; // Le titre affiché dans le menu
  content: string; // Le contenu de la page. A complexifier plus tard.
  children?: LeconPageNode[]; // Les sous-pages, de manière récursive
}

// interface Lecon principale
export interface Lecon {
  id: string; // ID Unique, qui peut être le slug principal (ex: "composants-standards")
  icon: string;
  title: string;
  type: string;
  category: string;
  application: string;
  levels: { level: string; subLevel: string }[];
  //Remplace "content" et "href". C'est la racine de l'arbre d'une leçon.
  pageTree: LeconPageNode;
  links: { title: string; href: string }[];
  downloadRef: string;
  status: string;
}
