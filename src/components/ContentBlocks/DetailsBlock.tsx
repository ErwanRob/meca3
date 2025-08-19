import React from "react";
import ContentRenderer from "@/components/ContentRenderer/ContentRenderer";
import type { ContentBlock } from "@/lib/schema/lecon";

interface DetailsBlockProps {
  data: {
    summary: string;
    defaultOpen?: boolean;
    content: ContentBlock[];
  };
  className: string;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ data, className }) => {
  return (
    <details className="" open={data.defaultOpen}>
      <summary className={`cursor-pointer font-bold ${className}`}>
        {data.summary}
      </summary>
      <div className="ml-1 border-l-1 border-orange-500 pl-4">
        <ContentRenderer blocks={data.content} />
      </div>
    </details>
  );
};

export default DetailsBlock;
