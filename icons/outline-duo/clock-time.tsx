import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockTime({
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
          d="m9,16.25c4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.2165,9.6633c.0199-.2188.0335-.4395.0335-.6633,0-4.0042-3.2459-7.25-7.25-7.25S1.75,4.9958,1.75,9s3.246,7.25,7.25,7.25c1.467,0,2.83-.439,3.9711-1.188"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="9 4.75 9 9 12.25 11.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="15.25" cy="12.75" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ClockTime;
