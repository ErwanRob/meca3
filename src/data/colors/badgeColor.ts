export const levelColors: Record<
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
};

export const categoryColors: Record<
  string,
  { textColor: string; bgColor: string }
> = {
  // # Categories
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
  // # Categories
  Finished: {
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

// # fallback (Red Warning/Error)
export const error: Record<string, { textColor: string; bgColor: string }> = {
  default: {
    textColor: "text-white",
    bgColor: "bg-red-600/80",
  },
};
