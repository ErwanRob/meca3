import React from "react";
import Badge from "@/components/Level/Badge";

export interface LevelDisplayProps {
  data: {
    level: string;
    subLevel?: string;
  }[];
  className?: string;
}

const LevelDisplay: React.FC<LevelDisplayProps> = ({
  data,
  className = "",
}) => {
  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      {data.map(({ level, subLevel }) => {
        return (
          <Badge
            key={level + (subLevel ? `-${subLevel}` : "")}
            level={level}
            subLevel={subLevel}
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
          />
        );
      })}
    </div>
  );
};

export default LevelDisplay;
