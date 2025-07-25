import React from "react";

export interface LevelPinProps {
  level: string;
  className?: string;
}

// TODO: Add A level converter to only display a colored dot when needed

const LevelPin: React.FC<LevelPinProps> = ({ level, className = "" }) => {
  return (
    <span className={`rounded-md bg-gray-100 text-sm font-light ${className}`}>
      {level}
    </span>
  );
};

export default LevelPin;
