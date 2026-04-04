import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics2({
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
          height="5.5"
          width="5.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="2.75"
        />
        <rect
          height="4"
          width="14.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="11.25"
        />
        <path
          d="M1.75,2.75h1c.552,0,1,.448,1,1v3.5c0,.552-.448,1-1,1H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25,2.75h-1c-.552,0-1,.448-1,1v3.5c0,.552,.448,1,1,1h1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="2.75"
          y2="5"
        />
        <circle cx="9" cy="13.25" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="5.75"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="12.25"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AutomatedLogistics2;
