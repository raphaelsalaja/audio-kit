import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutCols3({
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
          height="14"
          width="4"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          x="7"
          y="2"
        />
        <rect
          height="14"
          width="4"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="12.5"
          y="2"
        />
        <rect
          height="14"
          width="4"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="1.5"
          y="2"
        />
      </g>
    </svg>
  );
}

export default GridLayoutCols3;
