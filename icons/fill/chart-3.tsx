import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart3({
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
        <rect
          height="6.5"
          width="4"
          fill={fill}
          rx="1"
          ry="1"
          strokeWidth="0"
          x="1.5"
          y="9"
        />
        <rect
          height="9.5"
          width="4"
          fill={fill}
          rx="1"
          ry="1"
          strokeWidth="0"
          x="12.5"
          y="6"
        />
        <path
          d="m10,15.5h-2c-.5523,0-1-.4477-1-1V3c0-.5523.4477-1,1-1h2c.5523,0,1,.4477,1,1v11.5c0,.5523-.4477,1-1,1Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Chart3;
