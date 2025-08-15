import type { LeconPageNode, Lecon } from "@/lib/schema/lecon";

export const getActiveNodePaths = (
  startNode: LeconPageNode,
  basePath: string,
  slug: string[],
): Set<string> => {
  const paths = new Set<string>();
  const fullPath = `/portail/lecon/${slug.join("/")}`;

  function findPath(currentNode: LeconPageNode, currentPath: string) {
    const href = `${currentPath}/${currentNode.slug}`.replace(/\/+/g, "/");
    if (fullPath.startsWith(href)) {
      paths.add(href);
      currentNode.children?.forEach((child) => findPath(child, href));
    }
  }

  startNode.children?.forEach((child) => findPath(child, basePath));
  return paths;
};

export function groupLeconsByCategory(
  lecons: Lecon[],
): Record<string, Lecon[]> {
  return lecons.reduce<Record<string, Lecon[]>>((acc, item) => {
    const category = item.category || "Autres";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
}

export function getExpandableNodeHrefs(
  node: LeconPageNode,
  basePath: string,
  paths: Set<string> = new Set(),
): Set<string> {
  const currentHref = `${basePath}/${node.slug}`.replace(/\/+/g, "/");
  if (node.children && node.children.length > 0) {
    paths.add(currentHref);
    node.children.forEach((child) =>
      getExpandableNodeHrefs(child, currentHref, paths),
    );
  }
  return paths;
}

export function setsAreEqual(setA: Set<string>, setB: Set<string>) {
  if (setA.size !== setB.size) return false;
  for (const item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}
