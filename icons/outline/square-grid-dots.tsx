import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGridDots({
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
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <circle cx="12.125" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="5.875" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="5.875" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="12.125" fill={secondaryfill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default SquareGridDots;
