import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight4Show({
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
          d="m3.75,15.25h10.5c1.1046,0,2-.8955,2-2V4.75c0-1.1045-.8954-2-2-2H3.75c-1.1046,0-2,.8955-2,2v8.5c0,1.1045.8954,2,2,2Zm6.5-9.5h3v6.5h-3v-6.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="6.25 7 4.25 9 6.25 11"
          stroke={fill}
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
          x1="4.25"
          x2="8"
          y1="9"
          y2="9"
        />
        <rect
          height="12.5"
          width="14.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="2.75"
        />
        <rect
          height="6.5"
          width="3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="5.75"
        />
      </g>
    </svg>
  );
}

export default SidebarRight4Show;
