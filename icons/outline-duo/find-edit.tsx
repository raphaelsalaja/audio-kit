import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FindEdit({
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
          cy="10"
          fill={secondaryfill}
          opacity=".3"
          r="2.75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="10"
          fill="none"
          r="2.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,16.25V6.6644c0-.2653-.1054-.5198-.293-.7074l-3.9143-3.9143c-.1874-.1874-.4417-.2927-.7067-.2927h-5.586c-1.1046,0-2,.8954-2,2v10.5c0,1.1046.8954,2,2,2h6.5"
          fill="none"
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
          x1="11.09"
          x2="15.25"
          y1="12.09"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default FindEdit;
