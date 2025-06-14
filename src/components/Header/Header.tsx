import React from "react";
import Link from "next/link";

export interface HeaderLink {
  title: string; // text to display
  href: string; // href for the link
}

export interface HeaderProps {
  items: HeaderLink[]; // array of links to display in the header
  className?: string; // optional className for custom styles
}

const Header: React.FC<HeaderProps> = ({ items, className = "" }) => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/30 px-6 shadow-sm backdrop-blur-lg backdrop-filter">
      {/* #This h1 will be logo probly be image and need react-image */}
      <h1 className="text-xl font-semibold">Content Portal</h1>
      <nav
        className={`flex h-full items-center justify-between text-xl ${className}`}
      >
        <ul className="flex items-center justify-center gap-3 px-4">
          {items.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-6 py-2 transition-colors duration-150 hover:bg-orange-100"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="text-xl">Settings</div>
    </header>
  );
};

export default Header;
