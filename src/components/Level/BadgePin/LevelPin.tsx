import React from "react";

export interface LevelPinProps {
  level: string;
  className?: string;
}

// TODO: Add A level converter to only display a colored dot when needed
// ! Rework the level data structure as this one is no longer viable
// ! THIS COMONENT IS NOT USED ANYWHERE YET and NOT FUNCTIONAL regarding changes which has been made to the level data structure
// ! and the way data is passed to the components

const LevelPin: React.FC<LevelPinProps> = ({ level, className = "" }) => {
  return (
    <span className={`rounded-md bg-gray-100 text-sm font-light ${className}`}>
      {level}
    </span>
  );
};

export default LevelPin;
