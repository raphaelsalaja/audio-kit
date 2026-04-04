import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleImg4k({
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
        <polyline
          fill="none"
          points="11.5 4.75 7 4.75 7 4.2685 9.875 .75 10.25 .75 10.25 6"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="13.75"
          y1=".75"
          y2="6"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="13.75"
          y1=".75"
          y2="4.3578"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="15.2098"
          y1="6"
          y2="2.8919"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.25"
          x2="14.25"
          y1="8.75"
          y2="11.25"
        />
        <rect
          height="8"
          width="8"
          fill="none"
          rx="1.5"
          ry="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="8.25"
        />
        <rect
          height="8"
          width="8"
          fill="none"
          rx="1.5"
          ry="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="8.25"
        />
        <path
          d="m7.4496,16.25c-.2554-2.6614-2.4714-4.75-5.1996-4.75-.1713,0-.3329.0344-.5.0503v3.1997c0,.8284.6716,1.5,1.5,1.5h4.1996Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m1.75,5.75c0-1.105.895-2,2-2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,14.25c0,1.105-.895,2-2,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="7" cy="11" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ScaleImg4k;
