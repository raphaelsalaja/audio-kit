import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GymBag({
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
          d="M5.75,15.25V5c0-1.795,1.455-3.25,3.25-3.25h0c1.795,0,3.25,1.455,3.25,3.25V15.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.607,15.25c.413,0,.782-.248,.932-.633,.33-.847,.71-2.236,.71-3.617,0-.587-.069-2.18-.691-3.629-.16-.373-.524-.621-.93-.621H3.371c-.406,0-.77,.248-.93,.621-.623,1.449-.691,3.042-.691,3.629,0,1.382,.38,2.77,.71,3.617,.15,.385,.519,.633,.932,.633H14.607Z"
          fill="none"
          stroke={fill}
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
          x1="8.25"
          x2="9.75"
          y1="9.25"
          y2="9.25"
        />
      </g>
    </svg>
  );
}

export default GymBag;
