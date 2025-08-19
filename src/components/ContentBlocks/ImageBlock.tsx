import React from "react";
import Image from "next/image";

interface ImageBlockProps {
  data: {
    src: string;
    alt: string;
    caption?: string;
  };
  className: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ data, className }) => {
  return (
    <figure className={`relative my-4 flex flex-col items-center ${className}`}>
      <Image
        className="rounded-lg shadow-md"
        src={data.src}
        alt={data.alt}
        width={400}
        height={400}
        /*   fill={true} */
        /* sizes="(max-width: 768px) 100vw, 33vw" */
        style={{ objectFit: "contain" }}
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
