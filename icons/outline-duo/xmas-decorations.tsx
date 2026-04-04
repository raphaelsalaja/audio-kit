import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function XmasDecorations({
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
          d="M9 8.25C11.209 8.25 13 10.0409 13 12.25H5C5 10.0409 6.791 8.25 9 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 8.25C3.716 8.25 4.5 7.4665 4.5 6.5C4.5 5.5335 3.716 4.75 2.75 4.75C1.784 4.75 1 5.5335 1 6.5C1 7.4665 1.784 8.25 2.75 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17 6.5C17 5.5335 16.216 4.75 15.25 4.75C14.284 4.75 13.5 5.5335 13.5 6.5C13.5 7.4665 14.284 8.25 15.25 8.25C16.216 8.25 17 7.4665 17 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 8.5V6.75C7.25 6.198 7.698 5.75 8.25 5.75H9.75C10.302 5.75 10.75 6.198 10.75 6.75V8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 12.25H13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 1.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.25C3.716 8.25 4.5 7.4665 4.5 6.5C4.5 5.5335 3.716 4.75 2.75 4.75C1.784 4.75 1 5.5335 1 6.5C1 7.4665 1.784 8.25 2.75 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 6.5C17 5.5335 16.216 4.75 15.25 4.75C14.284 4.75 13.5 5.5335 13.5 6.5C13.5 7.4665 14.284 8.25 15.25 8.25C16.216 8.25 17 7.4665 17 6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C11.209 16.25 13 14.4591 13 12.25C13 10.0409 11.209 8.25 9 8.25C6.791 8.25 5 10.0409 5 12.25C5 14.4591 6.791 16.25 9 16.25Z"
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

export default XmasDecorations;
