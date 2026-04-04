import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedY({
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
          points="10.225 4.237 7.75 1.763 5.275 4.237"
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
          x1="7.75"
          x2="7.75"
          y1="10.75"
          y2="1.75"
        />
        <circle
          cx="16.75"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="1.75"
          cy="16.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="13.75"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="10.75"
          cy="10.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="3.75"
          cy="14.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="5.75"
          cy="12.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AxisDottedY;
