import { getAllLecons } from "@/lib/data";
import LeconsPageClient from "./LeconPageClient";

export default async function LeconPage() {
  const lecons = await getAllLecons();

  return <LeconsPageClient lecons={lecons} />;
}
