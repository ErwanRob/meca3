// src/components/SideMenu/SideMenu.tsx
import { LeconPageNode } from "@/types/leconTypes";
import React from "react";
import { SideMenuItemRenderer } from "./SideMenuItemRenderer";

export interface SideMenuProps {
  leconTitle: string;
  basePath: string;
  tree: LeconPageNode;
}

const SideMenu: React.FC<SideMenuProps> = ({ leconTitle, basePath, tree }) => {
  return (
    <nav
      // fix for sm height screen 90dvh is a quick fix = not the desired look
      // fix (need h-auto AND responsive attributes)
      className="sticky top-20 h-auto max-h-[calc(100vh-6rem)] self-start overflow-y-auto rounded-xl bg-white p-3 shadow-sm"
      style={{ width: "16rem" }} // same as w-64
    >
      <h2 className="mb-6 text-2xl font-bold">{leconTitle}</h2>
      <ul className="space-y-1">
        {/*On passe le noeud racine (pageTree) et le basePath (l'URL de la leçon) */}
        {/* <SideMenuItemRenderer node={tree} basePath={basePath} level={0} /> */}
        {tree.children &&
          tree.children.map((childNode) => (
            <SideMenuItemRenderer
              key={childNode.slug}
              node={childNode}
              // Le basePath reste celui de la leçon, car ces enfants sont au premier niveau.
              basePath={basePath}
              // Ils deviennent le niveau 0 de l'affichage.
              level={0}
            />
          ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
