import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tv3({
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
          height="10.5"
          width="14.5"
          fill={secondaryfill}
          opacity=".3"
          rx="2"
          ry="2"
          strokeWidth="0"
          x="1.75"
          y="3.75"
        />
        <rect
          height="10.5"
          width="14.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="3.75"
        />
        <rect
          height="6"
          width="7"
          fill={fill}
          rx=".5"
          ry=".5"
          strokeWidth="0"
          x="4"
          y="6"
        />
        <polyline
          fill="none"
          points="12 .75 9 3.75 6.75 1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="13" cy="7" fill={fill} r="1" strokeWidth="0" />
        <circle cx="13" cy="10" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Tv3;
