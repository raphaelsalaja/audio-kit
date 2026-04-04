import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RefreshClockwise({
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
          d="M16.2472 9.20422C16.1391 13.1138 12.9357 16.25 8.99998 16.25C5.98368 16.25 3.39809 14.408 2.30579 11.7883"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.88 14.6949L2.28799 11.75L5.23199 12.157"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75281 8.79724C1.86021 4.88694 5.0638 1.75 9 1.75C12.0051 1.75 14.5826 3.5784 15.6819 6.1825"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.12 3.30505L15.712 6.25L12.768 5.84302"
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

export default RefreshClockwise;
