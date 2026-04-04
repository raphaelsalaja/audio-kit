import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderX2({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="1.25"
          x2="1.25"
          y1="10.75"
          y2="1.25"
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
        <circle cx="6" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="3.25" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="8.75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default BorderX2;
