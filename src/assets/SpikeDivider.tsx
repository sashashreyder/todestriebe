import React from 'react';

interface SpikeDividerProps {
  className?: string;
  rotation?: number;
}

export const SpikeDivider: React.FC<SpikeDividerProps> = ({ 
  className = '', 
  rotation = 0 
}) => {
  return (
    <svg
      width="40"
      height="20"
      viewBox="0 0 40 20"
      className={`${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10L10 0L20 10L30 0L40 10L30 20L20 10L10 20L0 10Z"
        fill="#bfa14a"
        opacity="0.6"
      />
    </svg>
  );
};


