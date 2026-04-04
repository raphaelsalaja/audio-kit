import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeTriangle({
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
          d="M7.63801 3.49498L2.21301 12.891C1.60801 13.939 2.36401 15.25 3.57501 15.25H14.425C15.636 15.25 16.392 13.94 15.787 12.891L10.362 3.49498C9.75701 2.44698 8.24301 2.44698 7.63801 3.49498Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.63801 3.49498L2.21301 12.891C1.60801 13.939 2.36401 15.25 3.57501 15.25H14.425C15.636 15.25 16.392 13.94 15.787 12.891L10.362 3.49498C9.75701 2.44698 8.24301 2.44698 7.63801 3.49498Z"
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

export default ShapeTriangle;
