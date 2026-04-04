import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOld({
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
          height="13.5"
          width="7.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="5.25"
          y="3.75"
        />
        <rect
          height="1"
          width="2.5"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.75"
          y="8.25"
        />
        <circle
          cx="7.75"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="10.25"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="7.75"
          cy="14.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="10.25"
          cy="14.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="10.75"
          y1=".75"
          y2="3.75"
        />
      </g>
    </svg>
  );
}

export default PhoneOld;
