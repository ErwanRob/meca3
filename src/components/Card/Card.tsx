import React from "react";
import Image from "next/image";
import Link from "next/link";
import LevelPin from "@/components/LevelPin";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  level?: string;
  href: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  level,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className="flex h-full w-full justify-center rounded-xl shadow-sm"
    >
      <div
        className={`flex flex-col items-center overflow-hidden rounded-xl shadow-sm ${className}`}
      >
        <div className="relative aspect-[4/3] h-full w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain pt-8"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          {level && (
            <LevelPin
              level={level}
              className="absolute top-1 right-1 px-2 py-1 text-right"
            />
          )}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
