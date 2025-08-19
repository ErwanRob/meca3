import React from "react";

interface ListBlockProps {
  data: {
    style: "ordered" | "unordered";
    items: string[];
  };
  className: string;
}

const ListBlock: React.FC<ListBlockProps> = ({ data, className }) => {
  const ListTag = data.style === "ordered" ? "ol" : "ul";

  return (
    <ListTag className={`list-inside list-disc pl-4 ${className}`}>
      {data.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ListTag>
  );
};

export default ListBlock;
