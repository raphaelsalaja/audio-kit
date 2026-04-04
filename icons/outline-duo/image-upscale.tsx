import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageUpscale({
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
          height="8"
          width="8"
          fill={secondaryfill}
          opacity=".3"
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="2.75"
          y="7.25"
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
          x="2.75"
          y="7.25"
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
          x="2.75"
          y="7.25"
        />
        <path
          d="m8.4496,15.25c-.2554-2.6614-2.4714-4.75-5.1996-4.75-.1713,0-.3329.0344-.5.0503v3.1997c0,.8284.6716,1.5,1.5,1.5h4.1996Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,4.75c0-1.105.895-2,2-2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,13.25c0,1.105-.895,2-2,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="8" cy="10" fill={fill} r="1" strokeWidth="0" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="8.75"
          y1="2.75"
          y2="2.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.25"
          x2="15.25"
          y1="9.25"
          y2="10.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.25"
          x2="12"
          y1="2.75"
          y2="6"
        />
        <polyline
          fill="none"
          points="15.25 6.25 15.25 2.75 11.75 2.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ImageUpscale;
