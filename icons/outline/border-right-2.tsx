import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderRight2({
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
        <circle
          cx="1.25"
          cy="4.417"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="1.25"
          cy="7.583"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="1.25"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="7.583"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="4.417"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="7.583"
          cy="1.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="4.417"
          cy="1.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="1.25"
          cy="1.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="10.75"
          x2="10.75"
          y1="1.25"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default BorderRight2;
