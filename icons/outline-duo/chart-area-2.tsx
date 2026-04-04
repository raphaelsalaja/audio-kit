import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartArea2({
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
          d="M14.25 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V9.457C1.75 9.324 1.803 9.197 1.896 9.103L4.705 6.294C4.875 6.124 5.143 6.099 5.342 6.236L8.702 8.546C8.88 8.668 9.116 8.663 9.287 8.532L15.448 3.859C15.777 3.609 16.25 3.844 16.25 4.257V12.25C16.25 13.355 15.355 14.25 14.25 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V9.457C1.75 9.324 1.803 9.197 1.896 9.103L4.705 6.294C4.875 6.124 5.143 6.099 5.342 6.236L8.702 8.546C8.88 8.668 9.116 8.663 9.287 8.532L15.448 3.859C15.777 3.609 16.25 3.844 16.25 4.257V12.25C16.25 13.355 15.355 14.25 14.25 14.25Z"
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

export default ChartArea2;
