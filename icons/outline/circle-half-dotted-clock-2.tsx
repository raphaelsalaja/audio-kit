import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedClock2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m7.282,11.093l-.009-.002.009.002Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6,.75c2.899,0,5.25,2.35,5.25,5.25,0,2.899-2.35,5.25-5.25,5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m6,3.25v2.75l2,1.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx=".75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle
          cx="1.453"
          cy="3.375"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="3.375"
          cy="1.453"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="1.453"
          cy="8.625"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="3.375"
          cy="10.547"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleHalfDottedClock2;
