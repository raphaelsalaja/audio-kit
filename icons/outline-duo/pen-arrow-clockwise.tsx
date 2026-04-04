import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenArrowClockwise({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M8.07969 1.81283C11.9943 1.30713 15.604 4.03133 16.174 7.95993C16.751 11.92 14.006 15.5999 10.044 16.17C6.08199 16.75 2.40199 14.01 1.82599 10.04C1.41199 7.19991 2.70499 4.50997 4.92799 2.99997"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25598 2.77002L5.22898 2.75L5.24998 5.71997"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.54589 11.4543L11.9571 8.043C12.3476 7.6525 12.3476 7.01931 11.9571 6.62881L11.3713 6.043C10.9808 5.6525 10.3476 5.6525 9.95709 6.043L6.54589 9.45425L5.75009 12.2502L8.54589 11.4543Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.54589 11.4543L11.9571 8.043C12.3476 7.6525 12.3476 7.01931 11.9571 6.62881L11.3713 6.043C10.9808 5.6525 10.3476 5.6525 9.95709 6.043L6.54589 9.45425L5.75009 12.2502L8.54589 11.4543Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenArrowClockwise;
