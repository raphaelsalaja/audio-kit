import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gem2({
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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="3.75"
          x2="8.25"
          y1="4.75"
          y2="4.75"
        />
        <path
          d="m1.026,3.808l1.606-1.733c.192-.207.46-.325.74-.325h5.257c.28,0,.548.117.74.325l1.606,1.733c.339.366.369.925.071,1.326l-4.235,5.706c-.406.547-1.216.547-1.622,0L.954,5.134c-.297-.401-.267-.961.071-1.326Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Gem2;
