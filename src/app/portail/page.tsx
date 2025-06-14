import Card from "@/components/Card";
import { contentCards } from "@/data/cards";
import React from "react";

const Portail = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full flex justify-center px-2 py-4 mb-4 items-center border-b border-gray-200 shadow-sm">
        <h1 className="text-center mx-5 text-orange-400 text-4xl font-bold">
          {"Portail Meca3"}
        </h1>
      </div>
      <h2 className=" text-center max-w-6xl text-2xl px-2 py-4 mb-4 ">
        {
          "Découvrez l'univers de la mécanique enseignée du Lycée Professionnel aux Ecoles d'Ingénieurs en feuilletant ce petit dossier...."
        }
      </h2>

      <div className="max-w-6xl gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 grid-cols-1 mt-5 mb-20">
        {contentCards.map((card) => (
          <Card
            key={card.href}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            href={card.href}
            className="w-full h-full max-w-sm bg-white "
          />
        ))}
      </div>
      <footer className="w-full h-16 flex justify-center items-center bg-gray-800 text-white px-6 py-4 text-center">
        © {new Date().getFullYear()} Your Company — All rights reserved.
      </footer>
    </div>
  );
};

export default Portail;
