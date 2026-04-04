import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeCompare({
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
          d="M14.25 16.25C15.3546 16.25 16.25 15.3546 16.25 14.25C16.25 13.1454 15.3546 12.25 14.25 12.25C13.1454 12.25 12.25 13.1454 12.25 14.25C12.25 15.3546 13.1454 16.25 14.25 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.75C4.85457 5.75 5.75 4.85457 5.75 3.75C5.75 2.64543 4.85457 1.75 3.75 1.75C2.64543 1.75 1.75 2.64543 1.75 3.75C1.75 4.85457 2.64543 5.75 3.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 12.25V5.75C14.25 4.645 13.355 3.75 12.25 3.75H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 6L8.75 3.75L11 1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5.75V12.25C3.75 13.355 4.645 14.25 5.75 14.25H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 12L9.25 14.25L7 16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 16.25C15.3546 16.25 16.25 15.3546 16.25 14.25C16.25 13.1454 15.3546 12.25 14.25 12.25C13.1454 12.25 12.25 13.1454 12.25 14.25C12.25 15.3546 13.1454 16.25 14.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5.75C4.85457 5.75 5.75 4.85457 5.75 3.75C5.75 2.64543 4.85457 1.75 3.75 1.75C2.64543 1.75 1.75 2.64543 1.75 3.75C1.75 4.85457 2.64543 5.75 3.75 5.75Z"
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

export default CodeCompare;
