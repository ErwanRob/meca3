"use client"; // i. needed for useContext

import React, { useContext } from "react";
import Image from "next/image";
import { InteractionContext } from "@/context/InteractionContext";

interface ImageBlockProps {
  id?: string; // * id to be targetable
  data: {
    src: string;
    alt: string;
    caption?: string;
  };
  className?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ id, data, className }) => {
  const interaction = useContext(InteractionContext);

  // * Check if context state has a new source for the ID
  const currentSrc = (id && interaction?.interactionState[id]?.src) || data.src;

  return (
    <figure
      className={`my-4 flex flex-col items-center border-green-600 px-2 py-1 ${className}`}
    >
      <Image
        src={currentSrc} // * dynamic source
        alt={data.alt}
        width={400}
        height={400}
        className="rounded-lg shadow-md transition-opacity duration-300"
      />
      {data.caption && (
        <figcaption className="mt-2 text-sm text-gray-600 italic">
          {data.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageBlock;
