import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  href: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  href,
  className = "",
}) => {
  return (
    <Link href={href} className="block shadow-sm">
      <div
        className={`flex flex-col items-center rounded-sm shadow-sm overflow-hidden ${className}`}
      >
        <div className="w-full relative aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
