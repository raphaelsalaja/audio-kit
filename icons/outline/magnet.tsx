import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Magnet({
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
          x1="2.518"
          x2="5.743"
          y1="4.838"
          y2="5.242"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.482"
          x2="12.257"
          y1="4.838"
          y2="5.242"
        />
        <path
          d="M9,15.71c-2.988,0-5.764-1.934-6.676-5.056-.264-.904-.301-1.861-.184-2.795l.623-4.983c.069-.548,.568-.937,1.116-.868l1.24,.155c.548,.069,.937,.568,.868,1.116l-.632,5.054c-.13,1.044,.194,2.096,.891,2.885s1.7,1.242,2.752,1.242,2.056-.453,2.752-1.242,1.021-1.841,.891-2.885l-.632-5.054c-.069-.548,.32-1.048,.868-1.116l1.24-.155c.548-.069,1.048,.32,1.116,.868l.623,4.983c.117,.934,.08,1.891-.184,2.795-.912,3.123-3.688,5.056-6.676,5.056Z"
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

export default Magnet;
