import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import BadgeDisplay from "@/components/Level/BadgeDisplay";
import DownloadButton from "../DownloadButton";
import { Lecon } from "@/types/leconTypes";

// TODO look into a better solution for Badger, best be <BadgeDisplay data={levels, category, status} />

export interface ListItemProps {
  data: Lecon;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ data, className = "" }) => {
  const { id, title, application, levels, downloadRef, category, status } =
    data;

  const leconUrl = `/portail/lecon/${id}`;

  return (
    <div className="flex w-full items-stretch gap-2">
      <Link
        href={leconUrl}
        className={`flex w-full items-baseline justify-between rounded-xl border border-gray-200 px-4 py-2 text-gray-500 shadow-xs transition-all duration-150 hover:scale-[1.005] hover:bg-gray-100 hover:text-gray-950 ${className}`}
      >
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <BsChevronRight className="h-full text-xs text-gray-500" />
          {application && (
            <p className="text-sm text-gray-500">{application}</p>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <BadgeDisplay type="level" data={levels} className="" />
          <BadgeDisplay type="category" data={[category]} className="" />
          <BadgeDisplay type="status" data={[status]} className="" />
        </div>
      </Link>
      <DownloadButton href={downloadRef} fileName={title} className="" />
    </div>
  );
};

export default ListItem;

/* 
fix For if there is mulitple structure differencies with Td and tp
! Do the same for Counter.tsx and check for other components that might need similar changes
# in the parent component, how i'd use :
import type { Cours } from "@/types/coursTypes";
<ListItem<Cours> data={someCours} />

# here 
import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import BadgeDisplay from "@/components/Level/BadgeDisplay";
import DownloadButton from "../DownloadButton";
import type { BaseLesson } from "@/types/baseLessonTypes";

export interface ListItemProps<T extends BaseLesson> {
  data: T;
  className?: string;
}

function ListItem<T extends BaseLesson>({ data, className = "" }: ListItemProps<T>) {
  const { title, application, levels, href, downloadRef, category } = data;

  return (
    <div className="flex w-full items-stretch gap-2">
      <Link
        href={href}
        className={`flex w-full items-baseline justify-between rounded-xl border border-gray-200 px-4 py-2 text-gray-500 shadow-xs transition-all duration-150 hover:scale-[1.005] hover:bg-gray-100 hover:text-gray-950 ${className}`}
      >
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <BsChevronRight className="h-full text-xs text-gray-500" />
          {application && (
            <p className="text-sm text-gray-500">{application}</p>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="rounded-sm bg-green-300 px-2 text-sm text-gray-800">
            {category ?? ""}
          </span>
          <BadgeDisplay data={levels} className="" />
        </div>
      </Link>
      <DownloadButton href={downloadRef} fileName={title} className="" />
    </div>
  );
}

export default ListItem; */
