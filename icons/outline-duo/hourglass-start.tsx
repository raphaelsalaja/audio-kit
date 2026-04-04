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
          d="M7.23035 8.99579C4.93868 7.86973 4.76093 4.66933 4.76093 2.23941C7.59255 2.23282 13.2558 2.2236 13.2558 2.23941C13.2558 5.91393 12.6236 7.9685 10.7666 8.97603C12.4853 10.1021 13.2558 11.6233 13.2558 15.7324H4.76094C4.76094 13.421 4.8202 10.3787 7.23035 8.99579Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 15.75C4.75 11.89 5.307 10.294 7.21 9C5.307 7.706 4.75 6.11 4.75 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
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
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HourglassStart;
