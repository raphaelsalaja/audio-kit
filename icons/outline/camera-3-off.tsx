import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera3Off({
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
          d="M3.336 14.664C2.974 14.302 2.75 13.802 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C13.802 2.75 14.302 2.974 14.664 3.336"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.9922V13.25C15.25 14.355 14.355 15.25 13.25 15.25H6.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.055 10.945C6.557 10.447 6.25 9.76 6.25 9C6.25 7.481 7.481 6.25 9 6.25C9.759 6.25 10.447 6.558 10.945 7.055"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 6C5.6642 6 6 5.6642 6 5.25C6 4.8358 5.6642 4.5 5.25 4.5C4.8358 4.5 4.5 4.8358 4.5 5.25C4.5 5.6642 4.8358 6 5.25 6Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Camera3Off;
