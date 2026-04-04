import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartScatter({
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
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V12.75C3.5 13.4408 4.05921 14 4.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H4.75C3.23079 15.5 2 14.2692 2 12.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 12C6.5523 12 7 11.552 7 11C7 10.448 6.5523 10 6 10C5.4477 10 5 10.448 5 11C5 11.552 5.4477 12 6 12Z"
          fill={fill}
        />
        <path
          d="M7 8C7.5523 8 8 7.552 8 7C8 6.448 7.5523 6 7 6C6.4477 6 6 6.448 6 7C6 7.552 6.4477 8 7 8Z"
          fill={fill}
        />
        <path
          d="M10.5 10C11.0523 10 11.5 9.552 11.5 9C11.5 8.448 11.0523 8 10.5 8C9.9477 8 9.5 8.448 9.5 9C9.5 9.552 9.9477 10 10.5 10Z"
          fill={fill}
        />
        <path
          d="M11 6C11.5523 6 12 5.552 12 5C12 4.448 11.5523 4 11 4C10.4477 4 10 4.448 10 5C10 5.552 10.4477 6 11 6Z"
          fill={fill}
        />
        <path
          d="M14 11.5C14.5523 11.5 15 11.052 15 10.5C15 9.948 14.5523 9.5 14 9.5C13.4477 9.5 13 9.948 13 10.5C13 11.052 13.4477 11.5 14 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartScatter;
