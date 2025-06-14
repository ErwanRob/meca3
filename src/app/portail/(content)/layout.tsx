// components/ContentLayout.tsx
import type { ReactNode } from "react";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import { contentCards } from "@/data/cards";
import { contentHeader } from "@/data/header";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* 1. Fixed header (64px tall) */}
      <Header
        items={contentHeader.map((item) => ({
          title: item.title,
          href: item.href,
        }))}
        className=""
      />

      {/* 2. Content wrapper 
            - pt-24 = header (h-16) + gap (h-8) 
            - mb-8 = bottom gap before footer */}
      <div className="mb-8 px-6 pt-20 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] gap-6">
          {/* 4. Sticky SideMenu */}
          <SideMenu
            className=""
            items={contentCards.map((card) => ({
              title: card.title,
              href: card.href,
            }))}
          />

          {/* Main flowing content */}
          <main className="rounded-xl bg-white p-6 shadow-sm">{children}</main>
        </div>
      </div>

      {/* 5. Footer flows naturally below content */}
      <footer className="bg-gray-800 px-6 py-4 text-center text-white">
        © {new Date().getFullYear()} Your Company — All rights reserved.
      </footer>
    </div>
  );
}

{
  /* <header className="fixed top-0 left-0 w-full h-16 bg-gray-600 text-white z-50 px-6 flex items-center">
        <h1 className="text-xl font-semibold">Content Portal</h1>
      </header> */
}
