"use client";

import { LeconPageNode } from "@/types/leconTypes";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";

function getExpandableNodeHrefs(
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

function setsAreEqual(setA: Set<string>, setB: Set<string>) {
  if (setA.size !== setB.size) return false;
  for (const item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}

interface SideMenuContextType {
  openNodes: Set<string>;
  toggleNode: (href: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
}

const SideMenuContext = createContext<SideMenuContextType | undefined>(
  undefined,
);

export const SideMenuProvider = ({
  children,
  tree,
  basePath,
  initialOpenNodes,
}: {
  children: ReactNode;
  tree: LeconPageNode;
  basePath: string;
  initialOpenNodes: Set<string>;
}) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(initialOpenNodes);
  const prevInitialNodesRef = useRef<Set<string>>(initialOpenNodes);

  useEffect(() => {
    const previousNodes = prevInitialNodesRef.current;
    const currentNodes = initialOpenNodes;

    if (setsAreEqual(previousNodes, currentNodes)) {
      return;
    }

    setOpenNodes((manuallyOpenedNodes) => {
      const nodesToKeep = new Set(
        [...manuallyOpenedNodes].filter(
          (node) =>
            currentNodes.has(node) ||
            (!previousNodes.has(node) && !currentNodes.has(node)),
        ),
      );
      return nodesToKeep;
    });

    const timer = setTimeout(() => {
      setOpenNodes(currentNodes);
      prevInitialNodesRef.current = currentNodes;
    }, 150);

    return () => clearTimeout(timer);
  }, [initialOpenNodes]);

  const updateStateAndRef = (updater: (prev: Set<string>) => Set<string>) => {
    const newState = updater(openNodes);
    prevInitialNodesRef.current = newState;
    setOpenNodes(newState);
  };

  const toggleNode = (href: string) => {
    updateStateAndRef((prev) => {
      const newOpenNodes = new Set(prev);
      if (newOpenNodes.has(href)) {
        newOpenNodes.delete(href);
      } else {
        newOpenNodes.add(href);
      }
      return newOpenNodes;
    });
  };

  const expandAll = () => {
    const allExpandableHrefs = new Set<string>();
    tree.children?.forEach((child) =>
      getExpandableNodeHrefs(child, basePath, allExpandableHrefs),
    );
    updateStateAndRef(() => allExpandableHrefs);
  };

  const collapseAll = () => {
    updateStateAndRef(() => new Set());
  };

  return (
    <SideMenuContext.Provider
      value={{ openNodes, toggleNode, expandAll, collapseAll }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenu = () => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
};
