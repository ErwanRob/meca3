import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LeconPageNode } from "@/lib/schema/lecon";
import { SideMenuItemRenderer } from "./SideMenuItemRenderer";
import { SideMenuProvider } from "@/context/SideMenuContext";
import { ExpandCollapseButtons } from "./ExpandCollapseButtons";

export interface SideMenuProps {
  leconTitle: string;
  leconIcon: string;
  basePath: string;
  tree: LeconPageNode;
  initialOpenNodes: Set<string>;
}

const SideMenu: React.FC<SideMenuProps> = ({
  leconIcon,
  leconTitle,
  basePath,
  tree,
  initialOpenNodes,
}) => {
  return (
    <SideMenuProvider
      tree={tree}
      basePath={basePath}
      initialOpenNodes={initialOpenNodes}
    >
      <nav
        // fix for sm height screen 90dvh is a quick fix = not the desired look
        // fix (need h-auto AND responsive attributes)
        // ! w-64 reported in parent grid
        className="overflow- scrollbar sticky top-20 flex h-auto max-h-[calc(100vh-6rem)] flex-1 flex-col self-start overflow-y-auto rounded-xl bg-white p-3 shadow-sm"
      >
        <Link
          href={basePath}
          className="mb-6 flex items-center gap-2 text-2xl font-bold"
        >
          <Image
            src={leconIcon}
            alt={"icone de :" + leconTitle}
            width={32}
            height={32}
          />
          {leconTitle}
        </Link>
        <ExpandCollapseButtons />
        <ul className="">
          {tree.children &&
            tree.children.map((childNode) => (
              <SideMenuItemRenderer
                key={childNode.slug}
                node={childNode}
                basePath={basePath}
                level={0}
              />
            ))}
        </ul>
      </nav>
    </SideMenuProvider>
  );
};

export default SideMenu;
