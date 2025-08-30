"use client";
import React, { useState } from "react";
import type { Lecon } from "@/lib/schema/lecon";
import ContentList from "@/components/ContentList";
import FilterMenu from "@/components/FilterMenu";
import FilterInfoTracker from "@/components/FilterInfoTracker/FilterInfoTracker";
import Counter from "@/components/Counter";

export default function LeconsPageClient({ lecons }: { lecons: Lecon[] }) {
  // ~ state
  const [groupByCategory, setGroupByCategory] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Tout"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Tout",
  ]);
  // ~ filtering
  const filteredlecons: Lecon[] = lecons.filter((item) => {
    const categoryMatch =
      selectedCategories.includes("Tout") ||
      selectedCategories.includes(item.category);
    const levelMatch =
      selectedLevels.includes("Tout") ||
      item.levels.some(({ level }) => selectedLevels.includes(level));
    return levelMatch && categoryMatch;
  });

  return (
    <div className="mb-8 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-auto items-baseline justify-start gap-3 py-2 text-2xl">
          <h1 className="text-4xl font-bold text-amber-500">Leçon</h1>
          <span className="text-xl text-gray-700"> &bull;</span>
          <p className="text-xl text-gray-700">
            {"  Bienvenue dans la section Leçon."}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          {/* ~ Show/Hide Filter */}
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-black shadow hover:bg-orange-200"
          >
            {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
          </button>
          {/* ~ Display type */}
          <button
            onClick={() => setGroupByCategory((prev) => !prev)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-black shadow hover:bg-orange-200"
          >
            {groupByCategory ? "Vue compacte" : "Regrouper par catégorie"}
          </button>
        </div>
      </div>
      {/* ~ Filter Menu */}
      {showFilters && (
        <FilterMenu
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          className=""
        />
      )}
      {/* ~ Filter Pin */}
      <FilterInfoTracker
        selectedLevels={selectedLevels}
        selectedCategories={selectedCategories}
      />
      {/* ~ Dynamic Counter */}
      <Counter data={filteredlecons} />
      {/* ~ Content List */}
      <ContentList
        data={filteredlecons}
        className="flex flex-col items-center gap-2"
        groupByCategory={groupByCategory}
      />
    </div>
  );
}
