import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Refresh3({
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
          d="M9 16.25C13.004 16.25 16.25 13 16.25 9C16.25 5 13.004 1.75 9 1.75C4.996 1.75 1.75 5 1.75 9C1.75 13 4.996 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 3.25L2.29 6.25C3.373 3.61 5.969 1.75 9 1.75C12.9367 1.75 16.1407 4.89165 16.2473 8.79895"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 14.75L15.71 11.75C14.627 14.39 12.031 16.25 9 16.25C5.0633 16.25 1.8593 13.1083 1.7527 9.20093"
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

export default Refresh3;
