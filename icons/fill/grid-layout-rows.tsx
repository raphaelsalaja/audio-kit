import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutRows({
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
        <rect
          height="6"
          width="14"
          fill={secondaryfill}
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="2"
          y="10"
        />
        <rect
          height="6"
          width="14"
          fill={fill}
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="2"
          y="2"
        />
      </g>
    </svg>
  );
}

export default GridLayoutRows;
