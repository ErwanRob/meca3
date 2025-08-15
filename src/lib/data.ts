import allLeconsData from "@/data/content/lecons.json";
import { LeconsSchema } from "@/lib/schema/lecon"; // Zod schema
import type { Lecon, LeconPageNode } from "@/lib/schema/lecon"; // INFERRED types

const allLecons = LeconsSchema.parse(allLeconsData);

export async function getAllLecons(): Promise<Lecon[]> {
  "use cache";
  return allLecons;
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
