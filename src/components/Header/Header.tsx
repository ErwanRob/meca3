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
    <header className="fixed top-0 left-0 w-full h-16 bg-white/30 z-50 px-6 flex justify-between  items-center backdrop-filter backdrop-blur-lg border-b border-gray-200 shadow-sm">
      {/* #This h1 will be logo probly be image and need react-image */}
      <h1 className="text-xl font-semibold">Content Portal</h1>
      <nav
        className={`text-xl flex justify-between items-center h-full ${className}`}
      >
        <ul className="flex gap-3 px-4 items-center justify-center">
          {items.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-6 py-2 rounded hover:bg-gray-300 transition-colors duration-50"
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
