import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dial({
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
          x1="12.712"
          x2="9"
          y1="12.712"
          y2="9"
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="5.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy=".75" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="14.834"
          cy="3.166"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="17.25" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="14.834"
          cy="14.834"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="3.166"
          cy="14.834"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx=".75" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="3.166"
          cy="3.166"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Dial;
