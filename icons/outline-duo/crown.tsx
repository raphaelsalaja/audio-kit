import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crown({
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
          d="M14.155 11.937L15 7.5L11.75 9.5L9 5L6.25 9.5L3 7.5L3.845 11.937C3.935 12.409 4.347 12.75 4.827 12.75H13.172C13.652 12.75 14.065 12.409 14.155 11.937Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 3.25C9.552 3.25 10 2.8023 10 2.25C10 1.6977 9.552 1.25 9 1.25C8.448 1.25 8 1.6977 8 2.25C8 2.8023 8.448 3.25 9 3.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 6C2.552 6 3 5.5523 3 5C3 4.4477 2.552 4 2 4C1.448 4 1 4.4477 1 5C1 5.5523 1.448 6 2 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 6C16.552 6 17 5.5523 17 5C17 4.4477 16.552 4 16 4C15.448 4 15 4.4477 15 5C15 5.5523 15.448 6 16 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.155 11.937L15 7.5L11.75 9.5L9 5L6.25 9.5L3 7.5L3.845 11.937C3.935 12.409 4.347 12.75 4.827 12.75H13.172C13.652 12.75 14.065 12.409 14.155 11.937Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 15.75H4"
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

export default Crown;
