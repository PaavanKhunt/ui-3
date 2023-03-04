import React from "react";

export interface InfoArrowProps {}

export const InfoArrow = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="65"
      height="48"
      viewBox="0 0 65 48"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="41.5"
        cy="24.2826"
        r="23"
        stroke="#C5C5C5"
        stroke-dasharray="2 2"
      />
      <path
        d="M39.3536 25.1361C39.5488 24.9409 39.5488 24.6243 39.3536 24.429L36.1716 21.2471C35.9763 21.0518 35.6597 21.0518 35.4645 21.2471C35.2692 21.4423 35.2692 21.7589 35.4645 21.9542L38.2929 24.7826L35.4645 27.611C35.2692 27.8063 35.2692 28.1229 35.4645 28.3181C35.6597 28.5134 35.9763 28.5134 36.1716 28.3181L39.3536 25.1361ZM-4.37114e-08 25.2826L39 25.2826L39 24.2826L4.37114e-08 24.2826L-4.37114e-08 25.2826Z"
        fill="#C5C5C5"
      />
    </svg>
  );
};
