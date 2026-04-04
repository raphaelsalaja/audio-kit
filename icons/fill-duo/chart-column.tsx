import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartColumn({
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
          d="M13.25 3C13.6642 3 14 3.33579 14 3.75V11.75C14 12.1642 13.6642 12.5 13.25 12.5C12.8358 12.5 12.5 12.1642 12.5 11.75V3.75C12.5 3.33579 12.8358 3 13.25 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 6C6.66421 6 7 6.33579 7 6.75V11.75C7 12.1642 6.66421 12.5 6.25 12.5C5.83579 12.5 5.5 12.1642 5.5 11.75V6.75C5.5 6.33579 5.83579 6 6.25 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 9C10.1642 9 10.5 9.33579 10.5 9.75V11.75C10.5 12.1642 10.1642 12.5 9.75 12.5C9.33579 12.5 9 12.1642 9 11.75V9.75C9 9.33579 9.33579 9 9.75 9Z"
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

export default ChartColumn;
