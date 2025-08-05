/* "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronRight } from "react-icons/bs";
import { SideMenuItem } from "@/types/sideMenuItemTypes";

const RecursiveItem: React.FC<{
  item: SideMenuItem;
  level?: number;
}> = ({ item, level = 0 }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li>
      <Link
        href={item.href}
        className={`flex items-center justify-between rounded px-4 py-1 transition-colors ${isActive ? "bg-orange-200 font-semibold shadow-sm" : "hover:bg-orange-100"} ${level > 0 ? `pl-${level * 4}` : ""} `}
      >
        {item.title}
        <BsChevronRight
          className={`h-4 w-4 transition-transform ${isActive ? "rotate-90" : ""}`}
        />
      </Link>

      {item.children && (
        <ul className="mt-1 space-y-1">
          {item.children.map((child) => (
            <RecursiveItem key={child.href} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const RecursiveSideMenu: React.FC<{
  items: SideMenuItem[];
  className?: string;
}> = ({ items, className = "" }) => (
  <nav
    className={` ${className} sticky top-20 max-h-[80vh] overflow-y-auto rounded-xl bg-white p-6 shadow-sm`}
    style={{ width: "16rem" }}
  >
    <h2 className="mb-6 text-2xl font-bold">Navigation</h2>
    <ul className="space-y-2">
      {items.map((item) => (
        <RecursiveItem key={item.href} item={item} />
      ))}
    </ul>
  </nav>
);
 */
