"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeconPageNode } from "@/types/leconTypes";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { FaLayerGroup } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
/* import { GoDot } from "react-icons/go"; */
/* import { RiSeparator } from "react-icons/ri"; */

interface SideMenuItemRendererProps {
  node: LeconPageNode;
  basePath: string;
  level: number;
}

export const SideMenuItemRenderer: React.FC<SideMenuItemRendererProps> = ({
  node,
  basePath,
  level,
}) => {
  const pathname = usePathname();

  // --- CORRECTION pour slug 1st ---
  // On supprime la condition `level === 0`. La logique est maintenant la même pour tous les niveaux.
  // L'URL d'un noeud est TOUJOURS le chemin de son parent (basePath) + son propre slug.
  const href = `${basePath}/${node.slug}`.replace(/\/+/g, "/");

  // # L'utilisateur est dans l'arbre concerné
  const isActive =
    pathname.startsWith(href) &&
    (pathname === href || pathname.charAt(href.length) === "/");
  // # isExactActive (Selectioné et current view)
  const isExactActive = pathname === href;
  // # isOpen Chevron ouvert ou pas
  const [isOpen, setIsOpen] = useState(isActive);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  {
    // TODO Figure a way to make descendant more readable
    // TODO add a vertical line to the left of the last active child sub Menu
    // TODO Export the bullet logic to make it make more sense
  }
  return (
    <li>
      <div
        className={`flex items-stretch justify-between gap-1 rounded px-2 text-sm font-light transition-colors duration-150 hover:bg-orange-200/50 ${
          isActive ? "font-medium" : "font-light"
        }`}
      >
        {/* # Link */}
        <Link
          href={href}
          className={`flex flex-1 items-center gap-3 py-2 ${isExactActive ? "" : ""}`} /* font-semibold text-orange-500 */
          style={{ paddingLeft: `${level * 0.75}rem` }}
        >
          {/* {level} -  */}
          <div className="flex w-4 flex-shrink-0 items-center justify-center">
            {level === 0 ? (
              isActive ? (
                <FaLayerGroup className="text-gray-700" />
              ) : (
                <FaLayerGroup className="text-gray-400" />
              )
            ) : isExactActive ? (
              <GoDotFill className="text-xs text-orange-500" />
            ) : isActive ? (
              <GoDotFill className="text-xs text-gray-700" />
            ) : (
              <GoDotFill className="text-xs text-gray-300" />
              // <RiSeparator className="rotate-90 text-xs text-gray-300" />
            )}
          </div>
          {/* {level === 0 && <FaLayerGroup className="flex" />} */}

          {node.title}
        </Link>

        {/* # Chevron */}
        {node.children && node.children.length > 0 && (
          <div className="flex items-center">
            <button
              onClick={handleToggle}
              className={`rounded-full p-1 transition-transform duration-150 hover:scale-110 ${
                isOpen ? "" : "" /* bg-amber-500/40 */
              }`}
              aria-label={`Déplier la section ${node.title}`}
              aria-expanded={isOpen}
            >
              <BsChevronRight
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* # Children Spawn */}
      {isOpen && node.children && node.children.length > 0 && (
        <ul className={`space-y-1`}>
          {node.children.map((child) => (
            <SideMenuItemRenderer
              key={child.slug}
              node={child}
              basePath={href} // Le href du parent devient le basePath de l'enfant
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// On sélectionne la couleur en fonction du niveau des enfants (level + 1)
/* ${ levelBackgrounds[level] || "bg-red-300"} */
/* 


// NOUVEAU : On définit un tableau de couleurs pour chaque niveau de profondeur.
// Vous pouvez personnaliser ces couleurs comme vous le souhaitez.
const levelBackgrounds = [
  // level 0 (item1, item2...) n'ont pas de conteneur de fond, car ils sont au premier niveau.
  // Leurs enfants (level 1) auront le premier fond de cette liste.
  "bg-slate-300", // Fond pour les enfants de niveau 1
  "bg-slate-200", // Fond pour les enfants de niveau 2
  "bg-slate-100", // Fond pour les enfants de niveau 3
  // Ajoutez d'autres couleurs si votre arborescence est plus profonde
];



*/
