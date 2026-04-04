import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDollarDown({
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
          d="m15.25,5.3235v7.353c-1.2607,2.1386-3.5878,3.5735-6.25,3.5735-4.0041,0-7.25-3.2459-7.25-7.25S4.9959,1.75,9,1.75c2.6622,0,4.9893,1.4349,6.25,3.5735Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.07,2.999c-1.16-.789-2.561-1.249-4.07-1.249C4.996,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25c1.454,0,2.808-.428,3.943-1.165"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m17.25,11.25l-2,2-2-2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,13.25V4.75"
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
      </g>
    </svg>
  );
}

export default CircleDollarDown;
