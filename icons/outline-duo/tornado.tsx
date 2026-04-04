import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tornado({
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
          d="M9 7.25C13.0041 7.25 16.25 6.24264 16.25 5C16.25 3.75736 13.0041 2.75 9 2.75C4.99594 2.75 1.75 3.75736 1.75 5C1.75 6.24264 4.99594 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.295 9.00001C13.368 9.73301 11.122 10.25 8.5 10.25C5.048 10.25 2.25 9.35501 2.25 8.25001C2.25 7.64701 3.084 7.10601 4.403 6.74001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.245 12C13.402 12.591 11.595 13 9.5 13C6.601 13 4.25 12.216 4.25 11.25C4.25 10.78 4.805 10.354 5.709 10.039"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.557 15C10.8 15.305 9.656 15.5 8.375 15.5C6.097 15.5 4.25 14.884 4.25 14.125C4.25 13.509 5.464 12.988 7.137 12.813"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.25C13.0041 7.25 16.25 6.24264 16.25 5C16.25 3.75736 13.0041 2.75 9 2.75C4.99594 2.75 1.75 3.75736 1.75 5C1.75 6.24264 4.99594 7.25 9 7.25Z"
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

export default Tornado;
