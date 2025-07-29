import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import BadgeDisplay from "@/components/Level/BadgeDisplay";

export interface ListItemProps {
  title: string;
  theme: string;
  application?: string;
  levels: {
    level: string;
    subLevel?: string;
  }[];
  href: string;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  application,
  levels,
  href,
  className = "",
}) => {
  return (
    <Link href={href} className={`w-full`}>
      <div
        className={`flex items-baseline justify-between rounded-xl border border-gray-200 px-4 py-2 text-gray-700 shadow-xs transition-all duration-150 hover:bg-gray-200 hover:text-gray-950 ${className}`}
      >
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <BsChevronRight className="h-full text-xs text-gray-500" />
          {application && (
            <p className="text-sm text-gray-500">{application}</p>
          )}
        </div>
        <BadgeDisplay data={levels} className="" />
      </div>
    </Link>
  );
};

export default ListItem;
