import React from "react";
import { leconList } from "@/data/contentData/leconList";
import type { Lecon } from "@/types/leconTypes";

export interface CounterProps {
  data: Lecon[];
}

const Counter: React.FC<CounterProps> = ({ data }) => {
  return (
    <div className="mb-2 flex justify-end">
      <div className="rounded py-1 font-semibold text-orange-700">
        {data.length} sur {leconList.length} résultat
        {data.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default Counter;
