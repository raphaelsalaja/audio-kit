import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dress({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="12.75"
          y1="2.75"
          y2="1"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.5"
          x2="11.5"
          y1="7.75"
          y2="7.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="5.25"
          y1="2.75"
          y2="1"
        />
        <path
          d="M9,16.25c2.417,0,4.03-.257,5.75-.578,0-5.219-3.25-7.922-3.25-7.922,0,0,1.25-2.342,1.25-5-2.61,0-3.75,1.5-3.75,1.5,0,0-1.14-1.5-3.75-1.5,0,2.658,1.25,5,1.25,5,0,0-3.25,2.703-3.25,7.922,1.72,.321,3.333,.578,5.75,.578Z"
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

export default Dress;
