import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { contentCards } from "@/data/cards";
import React from "react";

const Portail = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      {/* #1. Header (64px tall) */}
      <div className="mb-4 flex w-full items-center justify-center border-b border-gray-200 px-2 py-4 shadow-sm">
        <h1 className="mx-5 text-center text-4xl font-bold text-orange-400">
          {"Portail Meca3"}
        </h1>
      </div>
      {/* #2. main wrapper}>*/}
      <main className="max-w-6xl flex-1">
        <h2 className="mb-4 max-w-6xl px-2 py-4 text-center text-2xl">
          {
            "Découvrez l'univers de la mécanique enseignée du Lycée Professionnel aux Ecoles d'Ingénieurs en feuilletant ce petit dossier...."
          }
        </h2>
        <div className="xs:grid-cols-1 mt-5 mb-20 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {contentCards.map((card) => (
            <Card
              key={card.href}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              href={card.href}
              className="h-full w-full max-w-sm bg-white"
            />
          ))}
        </div>
      </main>
      {/* #3. Footer flex-1 on main */}
      <Footer />
    </div>
  );
};

export default Portail;
