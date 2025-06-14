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
      /* fix for small height screen, atm cut by screen no acess to bottom links h-auto overflow-y-auto */
      className={`h-[90vh] overflow-y-auto bg-white p-6 shadow-sm rounded-xl sticky top-20 self-start ${className}`}
      style={{ width: "16rem" }} // same as w-64
    >
      <h2 className="text-2xl font-bold mb-6">Navigation</h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-1 rounded hover:bg-gray-300 transition-colors duration-20 ${
                  isActive ? "bg-gray-300 font-semibold" : ""
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
