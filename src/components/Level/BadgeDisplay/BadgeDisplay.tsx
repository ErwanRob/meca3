import React from "react";
import Badge from "@/components/Level/Badge";

export type BadgeDisplayProps =
  | {
      type: "level";
      data: { level: string; subLevel?: string }[];
      className?: string;
    }
  | {
      type: "category";
      data: string[];
      className?: string;
    }
  | {
      type: "status";
      data: string[];
      className?: string;
    };

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({
  type,
  data,
  className = "",
}) => {
  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      {type === "level" &&
        data.map((item) => (
          <Badge
            key={item.level + (item.subLevel ? `-${item.subLevel}` : "")}
            type="level"
            level={item.level}
            subLevel={item.subLevel}
            className=""
          />
        ))}

      {type === "category" &&
        data.map((category) => (
          <Badge
            key={category}
            type="category"
            category={category}
            className=""
          />
        ))}

      {type === "status" &&
        data.map((status) => (
          <Badge key={status} type="status" status={status} className="" />
        ))}
    </div>
  );
};

export default BadgeDisplay;
