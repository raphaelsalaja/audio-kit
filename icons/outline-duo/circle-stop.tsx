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
        <path
          d="m9,1.75C4.9959,1.75,1.75,4.9958,1.75,9s3.2459,7.25,7.25,7.25,7.25-3.2461,7.25-7.25S13.0041,1.75,9,1.75Zm2.75,9c0,.5522-.4477,1-1,1h-3.5c-.5523,0-1-.4478-1-1v-3.5c0-.5522.4477-1,1-1h3.5c.5523,0,1,.4478,1,1v3.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
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
        <rect
          height="5.5"
          width="5.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="6.25"
        />
      </g>
    </svg>
  );
}

export default CircleStop;
