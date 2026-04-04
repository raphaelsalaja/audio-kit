import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag5({
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
          d="M3.75 10.239C4.533 10.067 5.725 9.90201 7.125 10.125C8.438 10.334 8.948 10.729 10.035 10.909C10.978 11.065 12.384 11.065 14.25 10.239V3.25001C12.46 4.21201 11.114 4.25901 10.219 4.12501C9.054 3.95101 8.538 3.45601 7.125 3.18701C5.732 2.92201 4.531 3.08101 3.75 3.24901"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 10.239C4.533 10.067 5.725 9.90201 7.125 10.125C8.438 10.334 8.948 10.729 10.035 10.909C10.978 11.065 12.384 11.065 14.25 10.239V3.25001C12.46 4.21201 11.114 4.25901 10.219 4.12501C9.054 3.95101 8.538 3.45601 7.125 3.18701C5.732 2.92201 4.531 3.08101 3.75 3.24901"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 1.75V16.25"
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

export default Flag5;
