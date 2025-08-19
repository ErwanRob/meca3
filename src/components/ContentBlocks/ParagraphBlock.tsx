import React from "react";

interface ParagraphBlockProps {
  data: {
    text: string;
  };
  className: string;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ data, className }) => {
  return <p className={`my-2 px-2 ${className}`}>{data.text}</p>;
};

export default ParagraphBlock;
