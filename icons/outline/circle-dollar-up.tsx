import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollarUp({
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
          d="m13.07,15.001c-1.16.789-2.561,1.249-4.07,1.249-4.004,0-7.25-3.246-7.25-7.25S4.996,1.75,9,1.75c1.454,0,2.808.428,3.943,1.165"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.75,6.2501h-2.3752c-.7593,0-1.3748.6155-1.3748,1.3748v.0004c0,.7593.6155,1.3748,1.3748,1.3748h1.2503c.7593,0,1.3748.6155,1.3748,1.3748h0c0,.7593-.6155,1.3749-1.3748,1.3749h-2.3752m1.75-6.4999v1.0002m0,6.4998v-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="17.25 6.75 15.25 4.75 13.25 6.75"
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
          x1="15.25"
          x2="15.25"
          y1="4.75"
          y2="13.25"
        />
      </g>
    </svg>
  );
}

export default CircleDollarUp;
