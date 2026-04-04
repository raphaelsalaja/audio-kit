import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGrid3({
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
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="8"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="8"
          y="8"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="8"
          y="11"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="5"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="5"
          y="8"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="5"
          y="11"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="11"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="11"
          y="8"
        />
        <rect
          height="2"
          width="2"
          fill={secondaryfill}
          rx=".4"
          ry=".4"
          stroke="none"
          x="11"
          y="11"
        />
      </g>
    </svg>
  );
}

export default SquareGrid3;
