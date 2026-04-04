import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EaseInOut({
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
          d="M4 5.5C4.966 5.5 5.75 4.716 5.75 3.75C5.75 2.784 4.966 2 4 2C3.034 2 2.25 2.784 2.25 3.75C2.25 4.716 3.034 5.5 4 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 16C13.034 16 12.25 15.216 12.25 14.25C12.25 13.284 13.034 12.5 14 12.5C14.966 12.5 15.75 13.284 15.75 14.25C15.75 15.216 14.966 16 14 16Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 14.75C12 14.75 6 3.25 15.25 3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 3.75H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 5.5C4.966 5.5 5.75 4.716 5.75 3.75C5.75 2.784 4.966 2 4 2C3.034 2 2.25 2.784 2.25 3.75C2.25 4.716 3.034 5.5 4 5.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16C13.034 16 12.25 15.216 12.25 14.25C12.25 13.284 13.034 12.5 14 12.5C14.966 12.5 15.75 13.284 15.75 14.25C15.75 15.216 14.966 16 14 16Z"
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

export default EaseInOut;
