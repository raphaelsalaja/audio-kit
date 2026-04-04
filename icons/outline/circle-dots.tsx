import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDots({
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
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,10c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.5,10c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5,10c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleDots;
