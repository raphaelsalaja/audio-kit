import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollarOut({
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
          d="m10.75,6.2501h-2.3752c-.7593,0-1.3748.6155-1.3748,1.3748s.6155,1.3752,1.3748,1.3752h1.2503c.7593,0,1.3748.6155,1.3748,1.3748s-.6155,1.3749-1.3748,1.3749h-2.3752m1.75-6.4999v1.0002m0,6.4998v-1"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.2173,9.6479c.019-.2139.0327-.4292.0327-.6479,0-4.0039-3.2459-7.25-7.25-7.25S1.75,4.9961,1.75,9s3.2459,7.25,7.25,7.25c.2168,0,.4303-.0137.6423-.0325"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.75 12.25 17.25 14.75 14.75 17.25"
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
          x1="17"
          x2="12.25"
          y1="14.75"
          y2="14.75"
        />
      </g>
    </svg>
  );
}

export default CircleDollarOut;
