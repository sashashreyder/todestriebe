import React from 'react';

interface CrossDividerProps {
  className?: string;
  size?: number;
  color?: string;
}

export const CrossDivider: React.FC<CrossDividerProps> = ({ 
  className = '', 
  size = 24,
  color = '#bfa14a'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
};
