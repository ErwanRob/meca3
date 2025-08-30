import React from "react";

interface SubheadingBlockProps {
  data: {
    text: string;
  };
  className: string;
}

const SubheadingBlock: React.FC<SubheadingBlockProps> = ({
  data,
  className,
}) => {
  return (
    <h2
      className={`mt-6 mb-2 border-red-700 px-2 text-xl font-bold ${className}`}
    >
      {data.text}
    </h2>
  );
};

export default SubheadingBlock;
