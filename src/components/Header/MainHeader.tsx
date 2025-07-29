import React from "react";
import Link from "next/link";
/* import { BsChevronRight } from "react-icons/bs"; */

export interface MainHeaderLink {
  title: string; // text to display
  href: string; // href for the link
}

export interface MainHeaderProps {
  items: MainHeaderLink[]; // array of links to display in the header
  className?: string; // optional className for custom styles
}

const MainHeader: React.FC<MainHeaderProps> = ({ items, className = "" }) => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/30 px-6 shadow-sm backdrop-blur-lg backdrop-filter">
      {/* #This h1 will be logo probly be image and need react-image */}
      {/* #<h1 className="text-xl font-semibold">Meca3</h1> */}
      <nav
        className={`flex h-full items-center justify-between text-xl font-light ${className}`}
      >
        {/* ! removed px-4 and changed gap-3 to gap-1 */}
        <ul className="flex items-center justify-center gap-1">
          {items.map((item) => {
            return (
              <li key={item.href} className="flex items-center">
                {/* !added class for chevron */}
                <Link
                  href={item.href}
                  className="rounded px-6 py-2 transition-all duration-150 hover:text-amber-500"
                >
                  {item.title}
                </Link>
                {/* #<BsChevronRight className="mt-1 text-sm" /> */}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="text-sm">This is the MainHeader</div>
        <div className="text-sm">Paramètres</div>
      </div>
    </header>
  );
};

export default MainHeader;
