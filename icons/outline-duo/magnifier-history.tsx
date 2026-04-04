import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierHistory({
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
          d="M7.75 2.25C8.04309 2.25 8.2913 2.35074 8.2913 2.76049L6.15918 5.15918C5.2806 6.03786 5.28056 7.46217 6.15918 8.34082L10.3916 12.5732C9.60738 13.0037 8.70769 13.25 7.75 13.25C4.7125 13.25 2.25 10.7875 2.25 7.75C2.25 4.7125 4.7125 2.25 7.75 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25C9.2686 13.25 10.6434 12.6346 11.6387 11.6395"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 4.25L7.75 6.75L10.25 9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 6.75H13.75C15.131 6.75 16.25 5.631 16.25 4.25C16.25 2.869 15.131 1.75 13.75 1.75H11.25"
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

export default MagnifierHistory;
