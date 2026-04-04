import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Footsteps({
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
          d="M3.654,1.768c1.185-.181,2.415,.981,3.196,3.153s.006,3.758,.351,4.94c.365,1.25,1.222,3.252-.432,3.776-1.6,.507-2.104-.741-2.567-2.885-.217-1.006-2.21-2.575-2.403-4.567s.123-4.153,1.854-4.417Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.346,4.268c-1.185-.181-2.415,.981-3.196,3.153s-.006,3.758-.351,4.94c-.365,1.25-1.222,3.252,.432,3.776,1.6,.507,2.104-.741,2.567-2.885,.217-1.006,2.21-2.575,2.403-4.567s-.123-4.153-1.854-4.417Z"
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
          x1="4.202"
          x2="7.201"
          y1="10.753"
          y2="9.862"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.798"
          x2="10.799"
          y1="13.253"
          y2="12.362"
        />
      </g>
    </svg>
  );
}

export default Footsteps;
