// components/SideMenu.tsx
"use client";
import { BsChevronRight } from "react-icons/bs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface SideMenuItem {
  title: string;
  href: string;
}

export interface SideMenuProps {
  items: SideMenuItem[];
  className?: string; // let parent inject "sticky top-24"
}

const SideMenu: React.FC<SideMenuProps> = ({ items, className = "" }) => {
  const pathname = usePathname();

  return (
    <nav
      /* fix for sm height screen 90dvh is a quick fix = not the desired look 
        #(need h-auto AND responsive attributes) */
      className={`sticky top-20 h-[auto] self-start overflow-y-auto rounded-xl bg-white p-6 shadow-sm ${className}`}
      style={{ width: "16rem" }} // same as w-64
    >
      <h2 className="mb-6 text-2xl font-bold">Navigation</h2>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex h-8 items-center justify-between rounded px-4 py-0 transition-colors duration-150 hover:bg-orange-200 ${
                  isActive ? "bg-orange-200 font-semibold shadow-sm" : ""
                }`}
              >
                {item.title}
                <BsChevronRight
                  className={`mt-1 h-4 text-xs ${
                    isActive
                      ? "rotate-90 transform transition-transform duration-150"
                      : ""
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
