// Ce fichier est maintenant un Composant Serveur (pas de "use client")
import { getAllLecons } from "@/lib/data";
import LeconsInteractifs from "./LeconPageClient"; // On importe notre nouveau composant

export default async function LeconPage() {
  const lecons = await getAllLecons();

  return <LeconsInteractifs lecons={lecons} />;
}
