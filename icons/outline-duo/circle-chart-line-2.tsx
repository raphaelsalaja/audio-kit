import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChartLine2({
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
          d="M2.2315 11.603L6.5489 7.274C6.7436 7.079 7.0598 7.078 7.2554 7.27299L10.7523 10.749C10.948 10.944 11.2645 10.943 11.4592 10.747L15.7741 6.411C14.7319 3.686 12.092 1.75 9 1.75C4.9959 1.75 1.75 4.996 1.75 9C1.75 9.918 1.9205 10.795 2.2315 11.603Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.769 6.399L11.437 10.73C11.242 10.925 10.925 10.925 10.73 10.73L7.26997 7.27C7.07497 7.075 6.75798 7.075 6.56298 7.27L2.22998 11.599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.139 10.2713C15.5386 13.6696 12.5709 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.088 1.75 14.724 3.68 15.77 6.399"
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

export default CircleChartLine2;
