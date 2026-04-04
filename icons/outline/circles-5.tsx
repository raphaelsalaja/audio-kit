import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles5({
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
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="4.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="3.25"
          cy="3.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="14.75"
          cy="3.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="3.25"
          cy="14.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="14.75"
          cy="14.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Circles5;
