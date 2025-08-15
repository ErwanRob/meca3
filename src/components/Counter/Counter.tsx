import React from "react";
import allLecons from "@/data//content/lecons.json";
import type { Lecon } from "@/lib/schema/lecon";

export interface CounterProps {
  data: Lecon[];
}

const Counter: React.FC<CounterProps> = ({ data }) => {
  return (
    <div className="mb-2 flex justify-end">
      <div className="rounded py-1 font-semibold text-orange-700">
        {data.length} sur {allLecons.length} résultat
        {data.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default Counter;
