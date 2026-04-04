import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HourglassStart({
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
          d="M3.75 2.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.6016 4.7905C10.46 4.6074 10.2403 4.5 10.0088 4.5H7.99119C7.75979 4.5 7.53998 4.6074 7.39838 4.7905C7.25678 4.9736 7.20696 5.2124 7.26456 5.437C7.53996 6.5039 8.05849 6.8564 8.47459 7.1391C8.61729 7.2451 8.81068 7.3054 8.99998 7.3124C9.18928 7.3053 9.38267 7.245 9.52537 7.1391C9.94137 6.8564 10.46 6.5038 10.7354 5.437C10.793 5.2124 10.7432 4.9736 10.6016 4.7905Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.25 15.75C13.25 11.89 12.693 10.294 10.79 9C12.693 7.706 13.25 6.11 13.25 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 2.25C4.75 6.11 5.30699 7.706 7.20999 9C5.30699 10.294 4.75 11.89 4.75 15.75"
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

export default HourglassStart;
