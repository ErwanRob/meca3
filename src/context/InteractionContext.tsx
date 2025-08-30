/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { createContext } from "react";

export interface InteractionState {
  // Could create more complex state, but for now focus on img
  [targetId: string]: { src?: string };
}

export interface InteractionContextType {
  isMobile: boolean;
  interactionState: InteractionState;
  handleInteraction: (interaction: any) => void;
  resetInteraction?: (interaction: any) => void;
}
//Create context with a null value and export it
export const InteractionContext = createContext<InteractionContextType | null>(
  null,
);
