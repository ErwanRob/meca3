import React from "react";
import Image from "next/image";
import { ContentBlock } from "@/lib/schema/lecon";

interface ContentRendererProps {
  blocks: ContentBlock[];
}

// TODO Make each case (block) its own component for more control & feature (see RefactorContentRenderer TODO)

const ContentRenderer: React.FC<ContentRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return <p>Ce contenu nest pas encore disponible.</p>;
  }

  return (
    /* feat: prose lg:prose-xl */
    <div className="flex flex-col gap-2">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p className="" key={index}>
                {block.data.text}
              </p>
            );

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
                  <li className="" key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ListTag>
            );

          case "details":
            return (
              <details key={index} open={block.data.defaultOpen}>
                <summary className="cursor-pointer font-bold">
                  {block.data.summary}
                </summary>
                {/* Recursive Call! */}
                <div className="ml-2 border-l-2 pl-4">
                  <ContentRenderer blocks={block.data.content} />
                </div>
              </details>
            );

          case "grid":
            return (
              <div
                key={index}
                className="grid grid-cols-1 gap-2 md:grid-cols-2"
              >
                {block.data.columns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className="min-w-0 rounded-xl bg-orange-300/70 px-6 py-2"
                  >
                    {/* Recursive Call! */}
                    <ContentRenderer blocks={col.content} />
                  </div>
                ))}
              </div>
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
