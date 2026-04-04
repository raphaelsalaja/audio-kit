import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Refresh2({
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
          d="M9 15.25C12.4518 15.25 15.25 12.45 15.25 9C15.25 5.55 12.4518 2.75 9 2.75C5.5482 2.75 2.75 5.55 2.75 9C2.75 12.45 5.5482 15.25 9 15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.5 12.75L10.75 15L8.5 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.655 4.505C3.4774 5.6413 2.75 7.2359 2.75 9C2.75 12.452 5.55 15.25 9 15.25C9.6 15.25 10.17 15.166 10.72 15.01"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 5.25L7.25 3L9.5 0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.3444 13.4937C14.5146 12.3575 15.25 10.7634 15.25 9C15.25 5.548 12.45 2.75 9 2.75C8.42 2.75 7.86 2.82895 7.33 2.97595"
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

export default Refresh2;
