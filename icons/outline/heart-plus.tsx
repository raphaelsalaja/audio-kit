import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartPlus({
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
          x1="14"
          x2="14"
          y1="10.25"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.5"
          x2="11.5"
          y1="12.75"
          y2="12.75"
        />
        <path
          d="m15.8581,7.9104c.0823-.4192.1419-.8486.1419-1.3015.008-2.1199-1.704-3.8459-3.826-3.8589-1.277.0161-2.464.6599-3.174,1.72-.709-1.061-1.896-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.826,3.8589,0,4.8262,4.959,7.7942,6.5291,8.613.297.155.644.155.941,0,.06-.031.1326-.071.2025-.1089"
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

export default HeartPlus;
