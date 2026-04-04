import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Raindrops({
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
          d="M3.5,7.25c.966,0,1.75-.767,1.75-1.712,0-1.301-.981-1.857-1.75-2.788-.769,.931-1.75,1.487-1.75,2.788,0,.946,.784,1.712,1.75,1.712Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5,7.25c-.966,0-1.75-.767-1.75-1.712,0-1.301,.981-1.857,1.75-2.788,.769,.931,1.75,1.487,1.75,2.788,0,.946-.784,1.712-1.75,1.712Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,15.25c1.795,0,3.25-1.533,3.25-3.425,0-2.601-1.822-3.713-3.25-5.575-1.428,1.862-3.25,2.974-3.25,5.575,0,1.891,1.455,3.425,3.25,3.425Z"
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

export default Raindrops;
