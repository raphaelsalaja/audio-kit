import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Drone({
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
          x1="4.25"
          x2="4.25"
          y1="1.75"
          y2="5.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.25"
          x2="7.25"
          y1="2.75"
          y2="2.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="13.75"
          y1="1.75"
          y2="5.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="16.75"
          y1="2.75"
          y2="2.75"
        />
        <path
          d="M11.75,12.25l.25-3h2c.966,0,1.75-.783,1.75-1.75s-.784-1.75-1.75-1.75H4c-.966,0-1.75,.783-1.75,1.75s.784,1.75,1.75,1.75h2l.25,3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,16.25c0-2.209-1.791-4-4-4H6.25c-2.209,0-4,1.791-4,4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default Drone;
