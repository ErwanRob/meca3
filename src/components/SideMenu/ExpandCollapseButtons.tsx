"use client";

import { useSideMenu } from "@/context/SideMenuContext";

export const ExpandCollapseButtons = () => {
  const { expandAll, collapseAll } = useSideMenu();
  return (
    <div className="mb-4 flex items-center justify-end gap-4">
      <button
        onClick={expandAll}
        className="text-xs text-gray-500 hover:text-orange-600"
      >
        {"➕"}
      </button>
      <span className="text-xs text-gray-300">|</span>
      <button
        onClick={collapseAll}
        className="text-xs text-gray-500 hover:text-orange-600"
      >
        {"➖"}
      </button>
    </div>
  );
};
