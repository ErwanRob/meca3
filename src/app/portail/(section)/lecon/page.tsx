"use client";
import React, { useState } from "react";
import { leconList } from "@/data/leconList";
import ContentList from "@/components/ContentList";
import FilterMenu from "@/components/FilterMenu";

const LeconPage = () => {
  const [groupByCategory, setGroupByCategory] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedThemes, setSelectedThemes] = useState<string[]>(["Tout"]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Tout"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Tout",
  ]);

  const filteredlecons = leconList.filter((item) => {
    const themeMatch =
      selectedThemes.includes("Tout") || selectedThemes.includes(item.theme);

    const categoryMatch =
      selectedCategories.includes("Tout") ||
      selectedCategories.includes(item.category);

    const levelMatch =
      selectedLevels.includes("Tout") ||
      item.levels.some(({ level }) => selectedLevels.includes(level));

    return themeMatch && levelMatch && categoryMatch;
  });

  return (
    <div className="mb-8 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-auto items-baseline justify-start gap-3 py-2 text-2xl">
          <h1 className="text-4xl font-bold text-amber-500">Leçon</h1>
          <span className="text-xl text-gray-700"> &bull;</span>
          <p className="text-xl text-gray-700">
            Bienvenue dans la section Leçon.
          </p>
        </div>

        <div className="flex justify-end gap-2">
          {/* # Show/Hide Filter */}
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-black shadow hover:bg-orange-200"
          >
            {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
          </button>
          {/* # Display type */}
          <button
            onClick={() => setGroupByCategory((prev) => !prev)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-black shadow hover:bg-orange-200"
          >
            {groupByCategory ? "Vue simple" : "Regrouper par catégorie"}
          </button>
        </div>
      </div>
      {showFilters && (
        <FilterMenu
          selectedThemes={selectedThemes}
          setSelectedThemes={setSelectedThemes}
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          className=""
        />
      )}

      <ContentList
        data={filteredlecons}
        className="flex flex-col items-center gap-2"
        groupByCategory={groupByCategory}
      />
    </div>
  );
};

export default LeconPage;
