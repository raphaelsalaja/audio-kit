import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GlobeSearch({
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
          d="M9.853 16.2003C9.5075 16.2513 9.3596 16.25 9 16.25C4.9959 16.25 1.75 13.004 1.75 9C1.75 4.996 4.9959 1.75 9 1.75C13.0041 1.75 16.25 4.996 16.25 9C16.25 9.36 16.2512 9.50431 16.2007 9.85031C16.0647 9.91761 15.9828 9.95811 15.8846 9.91281C15.3113 9.64801 14.6729 9.5 14 9.5C11.5147 9.5 9.5 11.515 9.5 14C9.5 14.6895 9.6551 15.343 9.9324 15.927C9.972 16.0104 9.9 16.1412 9.853 16.2003Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.2549 16.2457C9.1702 16.2486 9.0852 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 9.0853 16.2485 9.17029 16.2455 9.25479"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9C16.25 7.343 13.004 6 9 6C4.996 6 1.75 7.343 1.75 9C1.75 10.657 4.996 12 9 12C9.0488 12 9.0974 11.9998 9.1459 11.9994"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.9994 9.1459C11.9998 9.0974 12 9.0488 12 9C12 4.996 10.657 1.75 9 1.75C7.343 1.75 6 4.996 6 9C6 13.004 7.343 16.25 9 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16.25C15.2426 16.25 16.25 15.243 16.25 14C16.25 12.757 15.2426 11.75 14 11.75C12.7574 11.75 11.75 12.757 11.75 14C11.75 15.243 12.7574 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
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

export default GlobeSearch;
