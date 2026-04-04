import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartGantt({
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
          d="M6.75 7.75C6.75 7.33579 7.08579 7 7.5 7H12.25C12.6642 7 13 7.33579 13 7.75C13 8.16421 12.6642 8.5 12.25 8.5H7.5C7.08579 8.5 6.75 8.16421 6.75 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 11.25C11 10.8358 11.3358 10.5 11.75 10.5H13.75C14.1642 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.1642 12 13.75 12H11.75C11.3358 12 11 11.6642 11 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 4.25C5.5 3.83579 5.83579 3.5 6.25 3.5H8.25C8.66421 3.5 9 3.83579 9 4.25C9 4.66421 8.66421 5 8.25 5H6.25C5.83579 5 5.5 4.66421 5.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V12.75C3.5 13.4408 4.05921 14 4.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H4.75C3.23079 15.5 2 14.2692 2 12.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartGantt;
