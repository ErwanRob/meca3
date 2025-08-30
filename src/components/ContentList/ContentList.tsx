// i. is a client component because of its parent?
import React from "react";
import ListItem from "@/components/ListItem";
import { TbSquareChevronRightFilled } from "react-icons/tb";
import { Lecon } from "@/lib/schema/lecon";
import { groupLeconsByCategory } from "@/lib/utils";

export interface ContentListProps {
  data: Lecon[];
  className?: string;
  groupByCategory?: boolean;
}

const ContentList: React.FC<ContentListProps> = ({
  data,
  className = "",
  groupByCategory = false,
}) => {
  // ~ Not Grouped
  if (!groupByCategory) {
    return (
      <div className={`${className}`}>
        {data.map((lecon) => (
          <ListItem key={lecon.id} data={lecon} className="" />
        ))}
      </div>
    );
  }
  const groupedByCategory = groupLeconsByCategory(data);

  return (
    // ~ Grouped
    <div className="flex flex-col gap-6">
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="w-full">
          <div className="mb-4 flex w-full items-center justify-start gap-4 border-b-2 border-orange-200 px-4 pb-2">
            <TbSquareChevronRightFilled className="fill-amber-500 text-2xl text-gray-700" />
            <h2 className="text-xl font-bold text-gray-700">{category}</h2>
          </div>
          <div className={`${className}`}>
            {items.map((lecon) => (
              <ListItem key={lecon.id} data={lecon} className="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
