"use client";

export interface FilterProps {
  selectedThemes: string[];
  setSelectedThemes: (themes: string[]) => void;
  selectedLevels: string[];
  setSelectedLevels: (levels: string[]) => void;
  className?: string;
}

const themes = ["Tout", "Mécanique", "Informatique", "Electricité", "Bâtiment"];
const levels = ["Tout", "Bac-Général (SI)", "Bac-Pro", "DUT", "Master"];

const Filter: React.FC<FilterProps> = ({
  selectedThemes,
  setSelectedThemes,
  selectedLevels,
  setSelectedLevels,
  className = "",
}) => {
  // Toggle selection for themes and levels
  const toggleSelection = (
    value: string,
    selectedList: string[],
    setSelectedList: (values: string[]) => void,
  ) => {
    // If "Tout" is selected, reset the selection
    if (value === "Tout") {
      setSelectedList(["Tout"]);
    } else {
      // If the value is already selected, remove it from the list
      const updated = selectedList.includes(value)
        ? selectedList.filter((v) => v !== value)
        : // Otherwise, add it to the list
          [...selectedList.filter((v) => v !== "Tout"), value];
      // If the updated list is empty, reset to "Tout"
      setSelectedList(updated.length > 0 ? updated : ["Tout"]);
    }
  };

  return (
    <div
      className={`mb-6 w-full rounded-xl bg-white px-6 py-2 shadow-md ${className}`}
    >
      {/* #Theme Filter */}
      <div className="mb-2">
        <div className="flex items-baseline gap-1 py-2">
          <p className="text-md font-medium text-gray-700">Thèmes</p>
          <span className="text-sm text-gray-500"> &bull;</span>
          <p className="text-sm text-gray-500">
            Choisissez le thème que vous voulez explorer
          </p>
        </div>
        <div className="flex flex-wrap gap-2 rounded-md bg-gray-100 p-1">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() =>
                toggleSelection(theme, selectedThemes, setSelectedThemes)
              }
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${
                selectedThemes.includes(theme)
                  ? "bg-orange-200 text-black shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* #Level Filter */}
      <div className="mb-2">
        <div className="flex items-baseline gap-1 py-2">
          <p className="text-md font-medium text-gray-700">Niveaux</p>
          <span className="text-sm text-gray-500"> &bull;</span>
          <p className="text-sm text-gray-500">
            Sélectionnez le niveau de difficulté
          </p>
        </div>
        <div className="flex flex-wrap gap-2 rounded-md bg-gray-100 p-1">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() =>
                toggleSelection(level, selectedLevels, setSelectedLevels)
              }
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${
                selectedLevels.includes(level)
                  ? "bg-orange-200 text-black shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
