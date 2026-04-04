import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridSystem2({
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
          height="2.5"
          width="5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="7.75"
        />
        <rect
          height="2.5"
          width="5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="7.75"
        />
        <rect
          height="2.5"
          width="12.5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="12.75"
        />
        <rect
          height="2.5"
          width="2.5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.75"
          y="2.75"
        />
        <rect
          height="2.5"
          width="2.5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <rect
          height="2.5"
          width="2.5"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="12.75"
          y="2.75"
        />
      </g>
    </svg>
  );
}

export default GridSystem2;
