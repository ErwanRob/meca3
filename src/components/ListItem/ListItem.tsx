import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import BadgeDisplay from "@/components/Level/BadgeDisplay";
import DownloadButton from "../DownloadButton";

export interface ListItemProps {
  title: string;
  application?: string;
  levels: {
    level: string;
    subLevel?: string;
  }[];
  href: string;
  downloadRef: string;
  className?: string;
  /* !show Theme and category on items*/
  theme: string;
  category?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  application,
  levels,
  href,
  downloadRef,
  className = "",
}) => {
  /* !show Theme and category on items*/
  /* theme,
  category, */
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
          {/* !show Theme and category on items*/}
          {/* <span className="rounded-sm bg-green-500 px-2 text-sm text-gray-800">
            {" "}
            {theme}
          </span>
          <span className="rounded-sm bg-green-300 px-2 text-sm text-gray-800">
            {category ? category : ""}
          </span> */}
          <BadgeDisplay data={levels} className="" />
        </div>
      </Link>
      <DownloadButton href={downloadRef} fileName={title} className="" />
    </div>
  );
};

export default ListItem;

/*   <Link href={href} className={`w-full rounded-xl`}></Link> */
