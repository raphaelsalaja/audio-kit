import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrientationPortrait({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.75"
          x2="2.75"
          y1="13.25"
          y2="5"
        />
        <polyline
          fill="none"
          points=".75 6.75 2.75 4.75 4.75 6.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="12.5"
          width="9"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.25"
          y="2.75"
        />
        <circle
          cx="11.75"
          cy="7.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <path
          d="M13.135,11.5c.895,0,1.276-.599,1.006-1.087-.466-.842-1.359-1.413-2.391-1.413s-1.925,.571-2.391,1.413c-.27,.487,.112,1.087,.669,1.087h3.107Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default OrientationPortrait;
