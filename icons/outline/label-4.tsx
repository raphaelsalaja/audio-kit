import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label4({
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
        <path
          d="m2.088,3.868l3.25-2.868c.378-.334.945-.334,1.323,0l3.25,2.868c.215.19.338.463.338.75v4.133c0,1.105-.895,2-2,2H3.75c-1.105,0-2-.895-2-2v-4.133c0-.287.123-.56.338-.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="6" cy="5" fill={secondaryfill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Label4;
