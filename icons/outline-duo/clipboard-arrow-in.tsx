import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardArrowIn({
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
          d="m6.25,2.75v.5c0,.5523.4477,1,1,1h3.5c.5523,0,1-.4477,1-1v-.5h1c1.105,0,2,.895,2,2v9.5c0,1.105-.895,2-2,2h-7.5c-1.105,0-2-.895-2-2V4.75c0-1.105.895-2,2-2h1Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.25,2.75h-1c-1.105,0-2,.895-2,2v9.5c0,1.105.895,2,2,2h7.5c1.105,0,2-.895,2-2v-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.75,7.25v-2.5c0-1.105-.895-2-2-2h-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="3"
          width="5.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="1.25"
        />
        <polyline
          fill="none"
          points="11 7.5 8.25 10.25 11 13"
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
          x1="8.5"
          x2="14.75"
          y1="10.25"
          y2="10.25"
        />
      </g>
    </svg>
  );
}

export default ClipboardArrowIn;
