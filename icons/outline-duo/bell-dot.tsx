import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellDot({
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
          d="m13.75,10.75v-4.25c0-.0576-.1353-.1318-.1952-.1154-.2576.0704-.525.1154-.8048.1154-1.792,0-3.25-1.458-3.25-3.25,0-.3795.0514-.8384.1745-1.1755.0422-.1155-.3874-.3245-.6745-.3245-2.623,0-4.75,2.127-4.75,4.75v4.25c0,1.105-.895,2-2,2h13.5c-1.105,0-2-.895-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.5,15.3843c-.2995.5175-.8591.8657-1.5.8657s-1.2005-.3482-1.5-.8657"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,1.75c-2.623,0-4.75,2.127-4.75,4.75v4.25c0,1.105-.895,2-2,2h13.5c-1.105,0-2-.895-2-2v-3.6421"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="12.75"
          cy="3.25"
          fill={fill}
          r="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BellDot;
