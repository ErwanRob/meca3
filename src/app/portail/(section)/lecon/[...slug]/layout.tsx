// components/ContentLayout.tsx
import type { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";

import { portailMenu } from "@/data/menuData/portailMenu";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      {/* 2. Content wrapper 
            - pt-24 = header (h-16) + gap (h-8) 
            - mb-8 = bottom gap before footer */}
      <main className="mb-8 flex-1 px-6 pt-20 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] gap-6">
          {/* 2-1. Sticky SideMenu */}
          <SideMenu
            className=""
            items={portailMenu.map((card) => ({
              title: card.title,
              href: card.href,
            }))}
          />

          {/* 2-2 Main flowing content */}
          <div className="flex-1 rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /* <header className="fixed top-0 left-0 w-full h-16 bg-gray-600 text-white z-50 px-6 flex items-center">
        <h1 className="text-xl font-semibold">Content Portal</h1>
      </header> */
}
