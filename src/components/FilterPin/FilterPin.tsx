import React from "react";

export interface FilterPinProps {
  selectedLevels: string[];
  selectedCategories: string[];
}

const FilterPin: React.FC<FilterPinProps> = ({
  selectedLevels,
  selectedCategories,
}) => {
  const pinList = [...selectedCategories, ...selectedLevels].filter(
    (item) => item !== "Tout",
  );

  if (pinList.length === 0) {
    return null;
  }

  // TODO : Add functionality to remove a filter when clicked
  return (
    <div className="mb-2 flex flex-wrap items-center px-0 py-2">
      <div className="flex flex-wrap justify-start gap-1">
        {pinList.map((category, index) => (
          <span
            key={index}
            className="rounded-md bg-white px-3 py-1 text-black shadow-sm transition"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterPin;
