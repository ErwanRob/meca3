import type { ReactNode } from "react";
import { MainHeader } from "@/components/Header";
import { mainHeader } from "@/data/mainHeader";
import Footer from "@/components/Footer";

export default function PortailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      {/* #1. Header (64px tall) */}
      <MainHeader
        items={mainHeader.map((item) => ({
          title: item.title,
          href: item.href,
        }))}
        className=""
      />
      {/* #2. main wrapper}>*/}
      <main className="mt-16 flex flex-1 flex-col sm:w-2xl md:w-3xl lg:w-5xl xl:w-6xl">
        {children}
      </main>
      {/* #3. Footer flex-1 on main */}
      <Footer />
    </div>
  );
}
