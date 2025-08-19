import React from "react";
import ContentRenderer from "@/components/ContentRenderer/ContentRenderer";
import type { ContentBlock } from "@/lib/schema/lecon";

interface GridBlockProps {
  data: {
    columns: {
      span?: number;
      content: ContentBlock[];
    }[];
  };
  className: string;
}

const GridBlock: React.FC<GridBlockProps> = ({ data, className }) => {
  return (
    <div className={`grid grid-cols-1 gap-1 py-2 md:grid-cols-2`}>
      <p className="bg-orange-600/70 text-center">This is a</p>
      <p className="bg-orange-600/70 text-center">grid component</p>
      {data.columns.map((col, colIndex) => (
        <div key={colIndex} className={`min-w-0 ${className}`}>
          <ContentRenderer blocks={col.content} />
        </div>
      ))}
    </div>
  );
};

export default GridBlock;
