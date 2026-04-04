import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStackedBar({
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
          d="M1.75 11.25H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.75H2.75C2.1977 6.75 1.75 7.198 1.75 7.75V14.25C1.75 14.802 2.1977 15.25 2.75 15.25H3.75C4.3023 15.25 4.75 14.802 4.75 14.25V7.75C4.75 7.198 4.3023 6.75 3.75 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.75H14.25C13.6977 8.75 13.25 9.198 13.25 9.75V14.25C13.25 14.802 13.6977 15.25 14.25 15.25H15.25C15.8023 15.25 16.25 14.802 16.25 14.25V9.75C16.25 9.198 15.8023 8.75 15.25 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 9.75H10.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 2.75H8.5C7.9477 2.75 7.5 3.198 7.5 3.75V14.25C7.5 14.802 7.9477 15.25 8.5 15.25H9.5C10.0523 15.25 10.5 14.802 10.5 14.25V3.75C10.5 3.198 10.0523 2.75 9.5 2.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChartStackedBar;
