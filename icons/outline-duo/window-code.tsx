import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowCode({
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
          d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5C6.33579 4.5 6 4.83579 6 5.25C6 5.66421 6.33579 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 12.25L13 10L10.75 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 12.25L5 10L7.25 7.75"
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

export default WindowCode;
