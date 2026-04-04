import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerYDotted({
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
        <path
          d="m2.75,2.25v1.5c0,1.105.895,2,2,2h8.5c1.105,0,2-.895,2-2v-1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.75,15.75v-1.5c0-1.105.895-2,2-2h8.5c1.105,0,2,.895,2,2v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="2.75" cy="9" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle
          cx="5.875"
          cy="9"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle
          cx="12.125"
          cy="9"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="15.25"
          cy="9"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DividerYDotted;
