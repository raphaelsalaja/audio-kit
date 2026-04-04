import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartBookmark({
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
          d="M17.25 7.25L15 5L12.75 7.25V1.75C12.75 1.198 13.198 0.75 13.75 0.75H16.25C16.802 0.75 17.25 1.198 17.25 1.75V7.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 3.25H3.75C2.645 3.25 1.75 4.145 1.75 5.25V13.75C1.75 14.855 2.645 15.75 3.75 15.75H12.25C13.355 15.75 14.25 14.855 14.25 13.75V9.5C14.1235 9.2941 14.0094 9.12081 13.8779 9.19701C13.2812 9.54271 12.5462 9.60099 11.889 9.32899C11.048 8.97999 10.5 8.16 10.5 7.25V3.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 8.5V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 6.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 3.25H3.75C2.645 3.25 1.75 4.145 1.75 5.25V13.75C1.75 14.855 2.645 15.75 3.75 15.75H12.25C13.355 15.75 14.25 14.855 14.25 13.75V9.834"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 7.25L15 5L12.75 7.25V1.75C12.75 1.198 13.198 0.75 13.75 0.75H16.25C16.802 0.75 17.25 1.198 17.25 1.75V7.25Z"
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

export default SquareChartBookmark;
