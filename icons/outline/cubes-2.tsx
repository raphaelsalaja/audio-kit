import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cubes2({
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="5.25"
          y1="9.896"
          y2="5.5"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="12.75"
          y1="9.896"
          y2="5.5"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="16.146"
          y2="11.75"
        />
        <polyline
          fill="none"
          points="8.83 3.83 5.25 5.5 1.67 3.829"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="9.17 3.83 12.75 5.5 16.33 3.829"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="12.58 10.08 9 11.75 5.42 10.079"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.387v3.226c0,.389-.225,.742-.577,.906l-2.75,1.283c-.268,.125-.578,.125-.846,0l-2.75-1.283c-.352-.164-.577-.518-.577-.906v-3.226c0-.389,.225-.742,.577-.906l2.75-1.283c.268-.125,.578-.125,.846,0l2.75,1.283c.352,.164,.577,.518,.577,.906Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.387v3.226c0,.389,.225,.742,.577,.906l2.75,1.283c.268,.125,.578,.125,.846,0l2.75-1.283c.352-.164,.577-.518,.577-.906v-3.226c0-.389-.225-.742-.577-.906l-2.75-1.283c-.268-.125-.578-.125-.846,0l-2.75,1.283c-.352,.164-.577,.518-.577,.906Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75,10.637v3.226c0,.389-.225,.742-.577,.906l-2.75,1.283c-.268,.125-.578,.125-.846,0l-2.75-1.283c-.352-.164-.577-.518-.577-.906v-3.226c0-.389,.225-.742,.577-.906l2.75-1.283c.268-.125,.578-.125,.846,0l2.75,1.283c.352,.164,.577,.518,.577,.906Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cubes2;
