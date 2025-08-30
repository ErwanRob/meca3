"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useContext } from "react";
import Link from "next/link";
import { InteractionContext } from "@/context/InteractionContext";

interface ParagraphBlockProps {
  data: {
    content: {
      _type: "span";
      text: string;
      marks?: string[];
    }[];
    markDefs?: {
      _key: string;
      _type: string;
      [key: string]: any;
    }[];
  };
  className?: string;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ data, className }) => {
  const interaction = useContext(InteractionContext);

  return (
    <p className={`border-purple-600 pt-2 ${className}`}>
      {data.content.map((span, index) => {
        if (!span.marks || span.marks.length === 0) {
          return <React.Fragment key={index}>{span.text}</React.Fragment>;
        }

        const markKey = span.marks[0];
        const markDef = data.markDefs?.find((def) => def._key === markKey);

        if (!markDef) {
          return <React.Fragment key={index}>{span.text}</React.Fragment>;
        }

        if (markDef._type === "link") {
          return (
            <Link
              key={index}
              href={markDef.href}
              className="text-blue-600 underline"
            >
              {span.text}
            </Link>
          );
        }

        if (
          markDef._type === "interaction" &&
          interaction &&
          !interaction.isMobile
        ) {
          return (
            <span
              key={index}
              className="cursor-pointer font-bold text-orange-600 transition-colors hover:text-orange-400"
              onMouseEnter={() => interaction.handleInteraction(markDef)}
              onMouseLeave={() => interaction.resetInteraction?.(markDef)}
            >
              {span.text}
            </span>
          );
        }

        return <React.Fragment key={index}>{span.text}</React.Fragment>;
      })}
    </p>
  );
};

export default ParagraphBlock;
