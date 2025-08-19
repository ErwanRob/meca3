/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import { ContentBlock } from "@/lib/schema/lecon";
import ParagraphBlock from "@/components/ContentBlocks/ParagraphBlock";
import SubheadingBlock from "@/components/ContentBlocks/SubheadingBlock";
import ImageBlock from "@/components/ContentBlocks/ImageBlock";
import ListBlock from "@/components/ContentBlocks/ListBlock";
import DetailsBlock from "@/components/ContentBlocks/DetailsBlock";
import GridBlock from "@/components/ContentBlocks/GridBlock";

interface ContentRendererProps {
  blocks: ContentBlock[];
}

// * Maps the 'type' string from data to the actual React component.
const blockComponentMap = {
  paragraph: ParagraphBlock,
  subheading: SubheadingBlock,
  image: ImageBlock,
  list: ListBlock,
  details: DetailsBlock,
  grid: GridBlock,
};

const ContentRenderer: React.FC<ContentRendererProps> = ({ blocks }) => {
  if (!blocks || !blocks.length) {
    return <p>Ce contenu nest pas encore disponible.</p>;
  }

  return (
    // ~ Content Wrapper
    <div className="flex flex-col rounded-2xl">
      {blocks.map((block, index) => {
        const BlockComponent = blockComponentMap[block.type];
        if (!BlockComponent) {
          return null;
        }
        return (
          <BlockComponent
            key={index}
            data={block.data as any}
            className="bg-cyan-700/20"
          />
        );
      })}
    </div>
  );
};

export default ContentRenderer;
