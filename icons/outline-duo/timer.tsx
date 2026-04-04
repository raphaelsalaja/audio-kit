import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Timer({
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
          d="M16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 6.9782 2.57759 5.1497 3.91249 3.83476L9 9V1.75C13.0041 1.75 16.25 4.99594 16.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.02899 7C1.84699 7.635 1.75 8.306 1.75 9C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.25C9.69 10.25 10.25 9.69 10.25 9C10.25 8.31 9.69 7.75 9 7.75C8.31 7.75 7.75 8.31 7.75 9C7.75 9.69 8.31 10.25 9 10.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.293 8.293L3.883 3.883"
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

export default Timer;
