import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderTopLeft2({
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
          cx="10.75"
          cy="7.583"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="10.75"
          cy="4.417"
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
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="10.75"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="1.25 10.75 1.25 1.25 10.75 1.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default BorderTopLeft2;
