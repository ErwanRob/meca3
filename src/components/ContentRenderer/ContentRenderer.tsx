import React from "react";
import Image from "next/image";
import { ContentBlock } from "@/lib/schema/lecon";

interface ContentRendererProps {
  blocks: ContentBlock[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return <p>Ce contenu nest pas encore disponible.</p>;
  }

  return (
    /* TODO prose lg:prose-xl */
    <div className="max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.data.text}</p>;

          case "subheading":
            return (
              <h2 key={index} className="mt-6 mb-2 text-xl font-bold">
                {block.data.text}
              </h2>
            );

          case "image":
            return (
              <figure key={index} className="my-4 flex flex-col items-center">
                <Image
                  src={block.data.src}
                  alt={block.data.alt}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md"
                />
                {block.data.caption && (
                  <figcaption className="mt-2 text-sm text-gray-600 italic">
                    {block.data.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list":
            const ListTag = block.data.style === "ordered" ? "ol" : "ul";
            return (
              <ListTag key={index} className="list-inside list-disc pl-4">
                {block.data.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ListTag>
            );

          default:
            // Render nothing or a placeholder for unknown block types
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
