import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrientationLandscape({
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
        <circle cx="13.25" cy="9" fill={secondaryfill} r="1.25" stroke="none" />
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
        <path
          d="M9,7.284v3.431c0,.557,.6,.945,1.087,.675,.842-.466,1.413-1.359,1.413-2.391s-.571-1.925-1.413-2.391c-.487-.27-1.087,.118-1.087,.675Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default OrientationLandscape;
