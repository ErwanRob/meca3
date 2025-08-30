/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

// i. Needed to fix circular dependencies
import dynamic from "next/dynamic";
const ContentRenderer = dynamic(
  () => import("@/components/ContentRenderer/ContentRenderer"),
);
import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  InteractionContext,
  InteractionState,
} from "@/context/InteractionContext";
import type { ContentBlock } from "@/lib/schema/lecon";

interface InteractiveGridBlockProps {
  data: {
    columns: { content: ContentBlock[] }[];
  };
  className?: string;
}

const InteractiveGridBlock: React.FC<InteractiveGridBlockProps> = ({
  data,
  className,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [interactionState, setInteractionState] = useState<InteractionState>(
    {},
  );

  // * hydratation check fix (bc useMediaQuery)
  // ! Need to check for another way to handle this, bc useMQ might often be reused.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ~ function called by interactive links
  const handleInteraction = useCallback((interaction: any) => {
    if (interaction.action === "setImage") {
      setInteractionState((prevState) => ({
        ...prevState,
        [interaction.targetId]: { src: interaction.payload },
      }));
    }
  }, []);

  // ~  function to reset state (ex : onMouseLeave)
  const resetInteraction = useCallback((interaction: any) => {
    setInteractionState((prevState) => ({
      ...prevState,
      [interaction.targetId]: { src: undefined },
    }));
  }, []);

  if (!isClient) {
    return null; // ! Probly will need a loading/loader solution
  }

  // * No interactivity on mobile
  if (isMobile) {
    const allContent = data.columns.flatMap((col) => col.content);
    return <ContentRenderer blocks={allContent} />;
  }

  return (
    <InteractionContext.Provider
      value={{
        isMobile,
        interactionState,
        handleInteraction: handleInteraction,
        resetInteraction,
      }}
    >
      <div
        className={`grid grid-cols-1 gap-2 border-orange-600 md:grid-cols-2 ${className}`}
      >
        {data.columns.map((col, colIndex) => (
          <div key={colIndex} className="min-w-0">
            <ContentRenderer blocks={col.content} />
          </div>
        ))}
      </div>
    </InteractionContext.Provider>
  );
};

export default InteractiveGridBlock;
