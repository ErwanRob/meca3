import type { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";
import { notFound } from "next/navigation";
import { getLeconPageData } from "@/lib/data";

// Note : Correction du type pour les props, ce n'est pas une promesse
export default async function LeconLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const data = await getLeconPageData(slug);

  // Si notre fonction ne trouve rien, on déclenche le 404
  if (!data) {
    return notFound();
  }

  const { lecon } = data; // On récupère juste ce dont on a besoin

  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <main className="mb-8 flex-1 px-6 pt-20 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] gap-2">
          <SideMenu
            leconTitle={lecon.title}
            basePath={`/portail/lecon/${lecon.id}`}
            tree={lecon.pageTree}
          />
          <div className="flex-1 rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
