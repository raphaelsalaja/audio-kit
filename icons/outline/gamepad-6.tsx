import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad6({
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
        <circle cx="14.25" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="12.75"
          cy="10.5"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.75"
          x2="4.75"
          y1="8.25"
          y2="11.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="3.25"
          y1="9.75"
          y2="9.75"
        />
        <path
          d="M13.25,5.75H4.75C2.541,5.75,.75,7.541,.75,9.75s1.791,4,4,4c1.008,0,1.917-.385,2.62-1h3.259c.703,.615,1.613,1,2.62,1,2.209,0,4-1.791,4-4s-1.791-4-4-4Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,5.75v-.75c0-.966,.784-1.75,1.75-1.75h1.75c.966,0,1.75-.784,1.75-1.75h0"
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

export default Gamepad6;
