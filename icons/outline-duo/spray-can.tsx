import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SprayCan({
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
          d="M10.25 4.75H6.75C5.094 4.75 3.75 6.094 3.75 7.75V15.25C3.75 15.802 4.198 16.25 4.75 16.25H12.25C12.802 16.25 13.25 15.802 13.25 15.25V13.25H8.75V8.75H13.25V7.75C13.25 6.094 11.906 4.75 10.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.25 13.25H8.75V8.75H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 3.5C13.6642 3.5 14 3.16421 14 2.75C14 2.33579 13.6642 2 13.25 2C12.8358 2 12.5 2.33579 12.5 2.75C12.5 3.16421 12.8358 3.5 13.25 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 2C16.1642 2 16.5 1.66421 16.5 1.25C16.5 0.835786 16.1642 0.5 15.75 0.5C15.3358 0.5 15 0.835786 15 1.25C15 1.66421 15.3358 2 15.75 2Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 5C16.1642 5 16.5 4.66421 16.5 4.25C16.5 3.83579 16.1642 3.5 15.75 3.5C15.3358 3.5 15 3.83579 15 4.25C15 4.66421 15.3358 5 15.75 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 4.75H10.25C11.906 4.75 13.25 6.094 13.25 7.75V15.25C13.25 15.802 12.802 16.25 12.25 16.25H4.75C4.198 16.25 3.75 15.802 3.75 15.25V7.75C3.75 6.094 5.094 4.75 6.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 4.75V1.75C6.75 1.198 7.198 0.75 7.75 0.75H9.25C9.802 0.75 10.25 1.198 10.25 1.75V4.75"
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

export default SprayCan;
