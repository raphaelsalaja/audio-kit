import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SprayCan({
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
        <polyline
          fill="none"
          points="13.25 13.25 8.75 13.25 8.75 8.75 13.25 8.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="13.25"
          cy="2.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="15.75"
          cy="1.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="15.75"
          cy="4.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M6.75,4.75h3.5c1.656,0,3,1.344,3,3v7.5c0,.552-.448,1-1,1H4.75c-.552,0-1-.448-1-1V7.75c0-1.656,1.344-3,3-3Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75,4.75V1.75c0-.552,.448-1,1-1h1.5c.552,0,1,.448,1,1v3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SprayCan;
