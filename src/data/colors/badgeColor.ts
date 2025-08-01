export const badgeColors: Record<
  string,
  { textColor: string; bgColor: string }
> = {
  // # Levels
  "Tous Niveaux": {
    textColor: "text-gray-700",
    bgColor: "bg-gray-200",
  },
  "BEP-MSMA": {
    textColor: "text-blue-800",
    bgColor: "bg-blue-100",
  },
  "BAC-Pro MEI": {
    textColor: "text-purple-800",
    bgColor: "bg-purple-100",
  },
  "BAC-Pro MELEC": {
    textColor: "text-pink-800",
    bgColor: "bg-pink-100",
  },
  "BAC-S-SI": {
    textColor: "text-amber-800",
    bgColor: "bg-amber-100",
  },
  OFEPAL: {
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
  },
  "BTS-CCST": {
    textColor: "text-emerald-800",
    bgColor: "bg-emerald-100",
  },
  DAEU: {
    textColor: "text-green-800",
    bgColor: "bg-green-100",
  },
  "Cycle Ingénieur": {
    textColor: "text-red-800",
    bgColor: "bg-red-100",
  },

  // # Categories
  Dessin: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Construction: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Technologie: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Analyse: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Mécanique: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Informatique: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Electricité: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },
  Bâtiment: {
    textColor: "text-white",
    bgColor: "bg-blue-700",
  },

  // # fallback (Red Warning/Error)
  default: {
    textColor: "text-white",
    bgColor: "bg-red-600/80",
  },
};
