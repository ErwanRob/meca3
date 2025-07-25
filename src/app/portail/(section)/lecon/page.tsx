"use client";
import React, { useState } from "react";
import { leconCards } from "@/data/leconCards";
import Grid from "@/components/Grid";
import Filter from "@/components/Filter";

const LeconPage = () => {
  const [selectedThemes, setSelectedThemes] = useState<string[]>(["Tout"]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Tout"]);

  // TODO: Maybe add a category filter for Leçon, on top of themes. Example : Dessin, Construction, Technologie, Analyse, DAO, Mécanique, etc.
  // For now, we will just filter by theme and level
  const filteredCards = leconCards.filter((card) => {
    const themeMatch =
      selectedThemes.includes("Tout") || selectedThemes.includes(card.theme);

    const levelMatch =
      selectedLevels.includes("Tout") || selectedLevels.includes(card.level);

    return themeMatch && levelMatch;
  });

  return (
    <div className="p-8">
      <div className="mb-4 flex h-auto items-center justify-start gap-3 text-2xl">
        <h1 className="font-bold">Leçon</h1>
        <span className=""> &bull;</span>
        <p className="">Bienvenue dans la section Leçon.</p>
      </div>
      <Filter
        selectedThemes={selectedThemes}
        setSelectedThemes={setSelectedThemes}
        selectedLevels={selectedLevels}
        setSelectedLevels={setSelectedLevels}
        className=""
      />
      {/* # Try to make images full width and text with padding */}
      <Grid data={filteredCards} className="" />
    </div>
  );
};

export default LeconPage;
