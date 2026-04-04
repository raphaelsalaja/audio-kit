import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard3({
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
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="4.5"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="1"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="8"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="11.5"
          y="8.5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="6.25"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="2.75"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="9.75"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="13.25"
          y="5"
        />
        <rect
          height="2"
          width="2"
          fill={fill}
          rx=".75"
          ry=".75"
          stroke="none"
          x="15"
          y="8.5"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.5"
          x2="13.5"
          y1="12.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default Keyboard3;
