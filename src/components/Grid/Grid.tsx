import React from "react";
import Card from "@/components/Card";
import { CardProps } from "@/components/Card";

export interface GridProps {
  data: CardProps[];
  className?: string;
}

const Grid: React.FC<GridProps> = ({ data, className = "" }) => {
  return (
    <div
      className={`xs:grid-cols-1 mt-4 mb-20 grid max-w-6xl grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${className}`}
    >
      {data.map((card) => (
        <Card
          key={card.href}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          title={card.title}
          level={card.level}
          href={card.href}
          className="h-full w-full max-w-sm bg-white"
        />
      ))}
    </div>
  );
};

export default Grid;
