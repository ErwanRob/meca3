import Card from "@/components/Card";
import { contentCards } from "@/data/cards";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-center mt-10 text-orange-400 text-6xl font-bold">
        {"Meca3"}
      </h1>
      <h2 className=" text-center max-w-6xl text-white text-2xl px-10 ">
        {
          "Découvrez l'univers de la mécanique enseignée du Lycée Professionnel aux Ecoles d'Ingénieurs en feuilletant ce petit dossier...."
        }
      </h2>

      <div className="gap-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 grid-cols-1">
        {contentCards.map((card) => (
          <Card
            key={card.href}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            href={card.href}
            className="w-full h-full max-w-sm bg-amber-950"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
