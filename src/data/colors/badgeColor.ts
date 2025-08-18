export const levelColors: Record<
  string,
  { textColor: string; bgColor: string }
> = {
  // ~ Levels
  "Tous Niveaux": {
    bgColor: "bg-gray-200",
    textColor: "text-gray-700",
  },
  "BEP-MSMA": {
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  "BAC-Pro MEI": {
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
  "BAC-Pro MELEC": {
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
  },
  "BAC-S-SI": {
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
  },
  OFEPAL: {
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  "BTS-CCST": {
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
  DAEU: {
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  "Cycle Ingénieur": {
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
};

export const categoryColors: Record<
  string,
  { textColor: string; bgColor: string }
> = {
  // ~ Categories
  Dessin: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Construction: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Technologie: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Analyse: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Mécanique: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Informatique: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Electricité: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
  Bâtiment: {
    textColor: "text-white",
    bgColor: "bg-gray-700/90",
  },
};

export const statusColors: Record<
  string,
  { textColor: string; bgColor: string }
> = {
  // ~ Categories
  Published: {
    textColor: "text-green-700",
    bgColor: "bg-white",
  },
  Pending: {
    textColor: "text-orange-600",
    bgColor: "bg-white",
  },
  Unavailable: {
    textColor: "text-red-700",
    bgColor: "bg-white",
  },
  "Potential Error": {
    textColor: "text-white",
    bgColor: "bg-red-700",
  },
};

// ~ fallback (Red Warning/Error)
export const error: Record<string, { textColor: string; bgColor: string }> = {
  default: {
    textColor: "text-white",
    bgColor: "bg-red-600/80",
  },
};
