import React from "react";
import ListItem from "@/components/ListItem";
import { ListItemProps } from "@/components/ListItem";
/* import { FaChevronRight } from "react-icons/fa"; */
import { TbSquareChevronRightFilled } from "react-icons/tb";

export interface ContentListProps {
  data: ListItemProps[];
  className?: string;
  groupByCategory?: boolean;
}

const ContentList: React.FC<ContentListProps> = ({
  data,
  className = "",
  groupByCategory = false,
}) => {
  // # Not Grouped
  if (!groupByCategory) {
    return (
      <div className={`${className}`}>
        {data.map((listItem) => (
          <ListItem
            key={listItem.href}
            title={listItem.title}
            theme={listItem.theme}
            category={listItem.category}
            application={listItem.application}
            levels={listItem.levels}
            href={listItem.href}
            downloadRef={listItem.downloadRef}
            className=""
          />
        ))}
      </div>
    );
  }

  // Function to group items by category
  const groupedByCategory = data.reduce<Record<string, ListItemProps[]>>(
    (acc, item) => {
      const category = item.category || "Autres";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {},
  );

  return (
    // # Grouped
    <div className="flex flex-col gap-6">
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="w-full">
          <div className="mb-4 flex w-full items-center justify-start gap-4 border-b-2 border-orange-200 px-4 pb-2">
            <TbSquareChevronRightFilled className="fill-amber-500 text-2xl text-gray-700" />
            <h2 className="text-xl font-bold text-gray-700">{category}</h2>
          </div>
          <div className={`${className}`}>
            {items.map((listItem) => (
              <ListItem
                key={listItem.href}
                title={listItem.title}
                theme={listItem.theme}
                category={listItem.category}
                application={listItem.application}
                levels={listItem.levels}
                href={listItem.href}
                downloadRef={listItem.downloadRef}
                className=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;

/* 

import React from "react";
import ListItem from "@/components/ListItem";
import { ListItemProps } from "@/components/ListItem";

export interface ContentListProps {
  data: ListItemProps[];
  className?: string;
}

const ContentList: React.FC<ContentListProps> = ({ data, className = "" }) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {data.map((listItem) => (
        <ListItem
          key={listItem.href}
          title={listItem.title}
          theme={listItem.theme}
          category={listItem.category}
          application={listItem.application}
          levels={listItem.levels}
          href={listItem.href}
          className=""
        />
      ))}
    </div>
  );
};

export default ContentList;

*/
