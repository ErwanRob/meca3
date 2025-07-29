import React from "react";

import { badgeColors } from "@/data/badgeColor";

export interface BadgeProps {
  level: string;
  subLevel?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ level, subLevel, className = "" }) => {
  const { textColor, bgColor } = badgeColors[level] || badgeColors.default;

  return (
    <span
      className={`inline-block rounded-xl px-2 py-1 text-xs font-semibold ${bgColor} ${textColor} ${className}`}
    >
      {subLevel ? `${level} (${subLevel})` : level}
    </span>
  );
};

export default Badge;
