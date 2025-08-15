import type { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";
import { notFound } from "next/navigation";
import { getLeconPageData } from "@/lib/data";
import { getActiveNodePaths } from "@/lib/utils";

export default async function LeconLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const data = await getLeconPageData(slug);

  if (!data) {
    return notFound();
  }

  const { lecon } = data;
  const basePath = `/portail/lecon/${lecon.id}`;
  const initialOpenNodes = getActiveNodePaths(lecon.pageTree, basePath, slug);

  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <div className="mb-8 flex-1 px-6 pt-20 pb-20">
        <div className="mx-auto grid grid-cols-[18rem_1fr] gap-2 2xl:grid-cols-[20rem_1fr]">
          <SideMenu
            leconTitle={lecon.title}
            leconIcon={lecon.icon}
            basePath={basePath}
            tree={lecon.pageTree}
            initialOpenNodes={initialOpenNodes}
          />
          <div className="flex-1 rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
