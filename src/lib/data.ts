import { LeconPageNode } from "@/types/leconTypes";
import allLecons from "@/data/content/lecons.json";
import type { Lecon } from "@/types/leconTypes";

export async function getAllLecons(): Promise<Lecon[]> {
  "use cache";
  const typedLecons: Lecon[] = allLecons;
  return typedLecons;
}

const findPageInTree = (
  path: string[],
  currentNode: LeconPageNode,
): LeconPageNode | null => {
  if (path.length === 0) return currentNode;

  const nextSlug = path[0];
  const remainingPath = path.slice(1);
  const nextNode = currentNode.children?.find(
    (child) => child.slug === nextSlug,
  );
  if (!nextNode) return null;

  return findPageInTree(remainingPath, nextNode);
};

// * The new, more ergonomic way to cache the function's result with "use cache" but experimental
export async function getLeconPageData(slug: string[]) {
  "use cache";
  if (!slug || slug.length === 0) return null;
  const lecons = await getAllLecons();
  const leconId = slug[0];
  const lecon = lecons.find((l) => l.id === leconId);
  if (!lecon) return null;

  const pathInLecon = slug.slice(1);
  const currentPage = findPageInTree(pathInLecon, lecon.pageTree);
  if (!currentPage) return null;

  return { lecon, currentPage };
}
