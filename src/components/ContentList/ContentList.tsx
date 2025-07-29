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
