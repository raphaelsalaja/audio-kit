import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutCols2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <rect
          height="11"
          width="5"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="6.5"
          y=".5"
        />
        <rect
          height="11"
          width="5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x=".5"
          y=".5"
        />
      </g>
    </svg>
  );
}

export default GridLayoutCols2;
