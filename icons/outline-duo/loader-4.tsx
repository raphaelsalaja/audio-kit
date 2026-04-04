import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader4({
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
          d="m9,12c1.6568,0,3-1.3432,3-3s-1.3432-3-3-3-3,1.3432-3,3,1.3432,3,3,3Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="2.75"
          fill={fill}
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="15.25"
          cy="9"
          fill={fill}
          opacity=".75"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="15.25"
          fill={fill}
          opacity=".5"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="2.75"
          cy="9"
          fill={fill}
          opacity=".25"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="13.4194"
          cy="4.5806"
          fill={fill}
          opacity=".88"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="13.4194"
          cy="13.4194"
          fill={fill}
          opacity=".63"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="4.5806"
          cy="13.4194"
          fill={fill}
          opacity=".38"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="4.5806"
          cy="4.5806"
          fill={fill}
          opacity=".13"
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Loader4;
