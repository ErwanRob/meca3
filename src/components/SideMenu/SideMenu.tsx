// components/SideMenu.tsx
"use client";

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
      /* fix for small height screen, atm cut by screen no acess to bottom links //h-auto overflow-y-auto */
      className={`sticky top-20 h-[90vh] self-start overflow-y-auto rounded-xl bg-white p-6 shadow-sm ${className}`}
      style={{ width: "16rem" }} // same as w-64
    >
      <h2 className="mb-6 text-2xl font-bold">Navigation</h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded px-4 py-1 transition-colors duration-150 hover:bg-orange-100 ${
                  isActive ? "bg-orange-100 font-semibold" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
