import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollarIn({
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
          d="m10,14.75c0-.6011.2339-1.166.6592-1.5908l2.5-2.5c.4248-.4253.9897-.6592,1.5908-.6592.3907,0,.763.1036,1.0933.2917.0896.051.4067-.7905.4067-1.2917,0-4.0039-3.246-7.25-7.25-7.25S1.75,4.9961,1.75,9s3.246,7.25,7.25,7.25c.5012,0,1.3345-.3295,1.2808-.426-.1811-.3255-.2808-.6909-.2808-1.074Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.75,6.2501h-2.3752c-.7593,0-1.3748.6155-1.3748,1.3748s.6155,1.3752,1.3748,1.3752h1.2503c.7593,0,1.3748.6155,1.3748,1.3748s-.6155,1.3749-1.3748,1.3749h-2.3752m1.75-6.4999v1.0002m0,6.4998v-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.2173,9.6479c.019-.2139.0327-.4292.0327-.6479,0-4.0039-3.2459-7.25-7.25-7.25S1.75,4.9961,1.75,9s3.2459,7.25,7.25,7.25c.2188,0,.4341-.0137.6479-.0327"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.75 17.25 12.25 14.75 14.75 12.25"
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
          x1="12.5"
          x2="17.25"
          y1="14.75"
          y2="14.75"
        />
      </g>
    </svg>
  );
}

export default CircleDollarIn;
