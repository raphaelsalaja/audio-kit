import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective2({
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
          d="M3.559 4.47901L10.059 5.84701C10.753 5.99301 11.25 6.60501 11.25 7.31501V14.749C11.25 15.702 10.373 16.413 9.441 16.217L2.941 14.849C2.247 14.703 1.75 14.091 1.75 13.381V5.94701C1.75 4.99401 2.627 4.28301 3.559 4.47901Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 13.375L14.441 13.521C15.373 13.717 16.25 13.006 16.25 12.053V4.61899C16.25 3.90999 15.753 3.29699 15.059 3.15099L8.55901 1.78299C7.84701 1.63299 7.17101 2.01399 6.89001 2.62599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.559 4.47901L10.059 5.84701C10.753 5.99301 11.25 6.60501 11.25 7.31501V14.749C11.25 15.702 10.373 16.413 9.441 16.217L2.941 14.849C2.247 14.703 1.75 14.091 1.75 13.381V5.94701C1.75 4.99401 2.627 4.28301 3.559 4.47901Z"
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

export default StackPerspective2;
