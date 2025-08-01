import React from "react";
import {
  levelColors,
  categoryColors,
  statusColors,
  error,
} from "@/data/colors/badgeColor";

// TODO add dififculty to the badge with maybe a 5G phone icon
// TODO add availability to the badge display only when course is unavailable or unfinished
// TODO look to extract the types of the badge to a separate file also for the BadgeDisplay component.

export type BadgeProps =
  // * Discriminated union : one of two shapes, never both at once
  | {
      type: "level";
      level: string;
      subLevel?: string;
      className?: string;
    }
  | {
      type: "category";
      category: string;
      className?: string;
    }
  | {
      type: "status";
      status: string;
      className?: string;
    };

const Badge: React.FC<BadgeProps> = (props) => {
  const { className = "" } = props;
  // # Level Badge
  if (props.type === "level") {
    const { level, subLevel } = props;
    const { textColor, bgColor } = levelColors[level] || error.default;

    return (
      <span
        className={`inline-block rounded-xl px-2 py-1 text-xs font-semibold ${bgColor} ${textColor} ${className}`}
      >
        {subLevel ? `${level} (${subLevel})` : level}
      </span>
    );
  }
  // # Category Badge
  if (props.type === "category") {
    const { category } = props;
    const { textColor, bgColor } = categoryColors[category] || error.default;

    return (
      <span
        className={`inline-block rounded-xl px-2 py-1 text-xs font-semibold ${bgColor} ${textColor} ${className}`}
      >
        {category}
      </span>
    );
  }

  // # status Badge
  if (props.type === "status") {
    const { status } = props;
    const { textColor, bgColor } = statusColors[status] || error.default;

    return (
      <span
        className={`inline-block rounded-xl px-2 py-1 text-xs font-semibold ${bgColor} ${textColor} ${className}`}
      >
        {status}
      </span>
    );
  }
};

export default Badge;
