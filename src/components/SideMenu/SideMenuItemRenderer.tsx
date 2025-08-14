"use client";
import React from "react";
import Link from "next/link";
import { LeconPageNode } from "@/types/leconTypes";
import { BsChevronRight } from "react-icons/bs";
import { useMenuItemStatus } from "@/hooks/useMenuItemStatus";
import { MenuItemIcon } from "./SideMenuItemIcon";
import { useSideMenu } from "@/context/SideMenuContext";

interface SideMenuItemRendererProps {
  node: LeconPageNode;
  basePath: string;
  level: number;
}

export const SideMenuItemRenderer: React.FC<SideMenuItemRendererProps> =
  React.memo(({ node, basePath, level }) => {
    const { href, isActive, isExactActive, shouldHighlightChildren } =
      useMenuItemStatus({ node, basePath });
    const { openNodes, toggleNode } = useSideMenu();
    const isOpen = openNodes.has(href);
    const handleToggle = () => toggleNode(href);

    return (
      <li className="pl-1">
        <div
          className={`flex items-stretch justify-between gap-1 rounded text-sm font-light 2xl:text-base ${
            isActive ? "font-medium" : "font-light"
          }`}
        >
          {/* # Link */}
          <Link
            href={href}
            className={`flex flex-1 items-center gap-3 p-2 ${isExactActive ? "text-orange-600" : "transition-all delay-75 duration-250 hover:translate-x-0.5"}`}
          >
            <div className="flex w-4 flex-shrink-0 items-center justify-center">
              <MenuItemIcon
                level={level}
                isActive={isActive}
                isExactActive={isExactActive}
              />
            </div>
            {node.title}
          </Link>

          {/* # Chevron */}
          {node.children && node.children.length > 0 && (
            <div className="flex items-center">
              <button
                onClick={handleToggle}
                className="p-1 transition-transform duration-150 hover:scale-110"
                aria-label={`Déplier la section ${node.title}`}
                aria-expanded={isOpen}
              >
                <BsChevronRight
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* # Children Spawn */}

        {isOpen && node.children && node.children.length > 0 && (
          <ul
            className={`relative mt-2 pl-2 before:absolute before:top-0 before:h-full before:w-[1px] before:rounded-full ${shouldHighlightChildren ? "before:bg-orange-500" : "before:bg-transparent"} before:left-[15px]`}
          >
            {node.children.map((child) => (
              <SideMenuItemRenderer
                key={child.slug}
                node={child}
                basePath={href}
                level={level + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  });

SideMenuItemRenderer.displayName = "SideMenuItemRenderer";
