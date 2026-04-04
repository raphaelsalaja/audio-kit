import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Perfume({
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
          cx="14.25"
          cy="3.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="16.75"
          cy="2.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="16.75"
          cy="5.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M7.75,6.969V2.75c0-.552,.448-1,1-1h1.5c.552,0,1,.448,1,1V6.969"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.439,16.25h6.121c1.321-.953,2.189-2.496,2.189-4.25,0-2.899-2.35-5.25-5.25-5.25s-5.25,2.351-5.25,5.25c0,1.754,.868,3.297,2.189,4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.815,9c.996-2.542,3.218-4.474,5.935-5.063"
          fill="none"
          stroke={secondaryfill}
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
          x1="4.25"
          x2="14.75"
          y1="11.75"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default Perfume;
