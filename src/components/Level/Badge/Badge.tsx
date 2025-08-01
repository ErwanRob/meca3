import React from "react";

/* TODO: Refactor this component to be more reusable, meaning it could be use for Category badges aswell if need be in the futur
 * data/colors/badgeColors already has the category colors setup
 */

import { badgeColors } from "@/data/colors/badgeColor";

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
