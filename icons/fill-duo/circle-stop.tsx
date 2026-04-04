import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleStop({
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
          fill={secondaryfill}
          opacity=".4"
          r="8"
          strokeWidth="0"
        />
        <rect
          height="7"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="5.5"
          y="5.5"
        />
      </g>
    </svg>
  );
}

export default CircleStop;
