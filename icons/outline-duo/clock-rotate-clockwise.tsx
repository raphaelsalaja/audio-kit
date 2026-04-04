import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockRotateClockwise({
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
          d="M9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75V9L12.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75281 8.79761C1.86001 4.88711 5.0637 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 13.004 13.004 16.25 9 16.25C5.979 16.25 3.39021 14.4023 2.30081 11.7762"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.88 14.695L2.28799 11.75L5.23199 12.157"
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

export default ClockRotateClockwise;
