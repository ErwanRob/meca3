"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { BsChevronDown } from "react-icons/bs";
import type { ContentBlock } from "@/lib/schema/lecon";
import { AnimatePresence, motion } from "motion/react";
import { TbSquareChevronRightFilled } from "react-icons/tb";

const ContentRenderer = dynamic(
  () => import("@/components/ContentRenderer/ContentRenderer"),
);

interface SectionFoldBlockProps {
  data: {
    title: string;
    defaultOpen?: boolean;
    content: ContentBlock[];
  };
  className?: string;
}

const SectionFoldBlock: React.FC<SectionFoldBlockProps> = ({
  data,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(data.defaultOpen || false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // ~ Block Wrapper
    <div className={`my-2 px-2 ${className}`}>
      {/* ~ Button */}
      <button
        onClick={toggleExpand}
        className="flex w-full cursor-pointer items-center justify-between border-b-2 border-gray-300 p-2 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2 text-2xl">
          {/* ~ Chevron 1 */}
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 90 }}
            transition={{ duration: 0.2 }}
          >
            <TbSquareChevronRightFilled className="fill-amber-500 text-gray-700" />
          </motion.div>
          {/* ~ Title */}
          <h2 className="text-xl font-semibold">{data.title}</h2>
        </div>
        {/* ~ Chevron 2 */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <BsChevronDown />
        </motion.div>
      </button>
      {/* ~ Foldable Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="flex flex-col overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: -15, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ContentRenderer blocks={data.content} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionFoldBlock;
