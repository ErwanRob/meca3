import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { LeconPageNode } from "@/types/leconTypes";

export function useMenuItemStatus({
  node,
  basePath,
}: {
  node: LeconPageNode;
  basePath: string;
}) {
  const pathname = usePathname();
  const href = useMemo(
    () => `${basePath}/${node.slug}`.replace(/\/+/g, "/"),
    [basePath, node.slug],
  );
  // * The user is in the correct tree
  const isActive = useMemo(
    () =>
      pathname.startsWith(href) &&
      (pathname === href || pathname.charAt(href.length) === "/"),
    [pathname, href],
  );
  // * isExactActive (Selected & current view)
  const isExactActive = useMemo(() => pathname === href, [pathname, href]);

  // * Is a child active
  const activeChildNode = useMemo(
    () =>
      node.children?.find(
        (child) => `${href}/${child.slug}`.replace(/\/+/g, "/") === pathname,
      ),
    [node.children, href, pathname],
  );
  // * Is Child a leaf (no childrens)
  const activeChildIsLeaf = useMemo(
    () =>
      activeChildNode
        ? !activeChildNode.children || activeChildNode.children.length === 0
        : false,
    [activeChildNode],
  );
  // * final condition for sideBar highlight
  const shouldHighlightChildren = useMemo(
    () => isExactActive || activeChildIsLeaf,
    [isExactActive, activeChildIsLeaf],
  );

  return {
    href,
    isActive,
    isExactActive,
    shouldHighlightChildren,
  };
}
