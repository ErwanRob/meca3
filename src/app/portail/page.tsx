import Grid from "@/components/Grid";
import React from "react";
import { portailMenu } from "@/data/portail/portailMenu";

const Portail = () => {
  return (
    <div className="mt-[5%] flex flex-1 flex-col px-6 xl:px-0">
      <h2 className="mb-4 max-w-6xl px-2 py-4 text-center text-2xl">
        {
          "Découvrez l'univers de la mécanique enseignée du Lycée Professionnel aux Ecoles d'Ingénieurs en feuilletant ce petit dossier...."
        }
      </h2>
      <Grid data={portailMenu} className="" />
    </div>
  );
};

export default Portail;
