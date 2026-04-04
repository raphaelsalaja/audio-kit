import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridCircle({
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
          d="M13.0001 8.25C14.795 8.25 16.2501 6.79493 16.2501 5C16.2501 3.20507 14.795 1.75 13.0001 1.75C11.2052 1.75 9.75012 3.20507 9.75012 5C9.75012 6.79493 11.2052 8.25 13.0001 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.00012 16.25C6.79505 16.25 8.25012 14.7949 8.25012 13C8.25012 11.2051 6.79505 9.75 5.00012 9.75C3.2052 9.75 1.75012 11.2051 1.75012 13C1.75012 14.7949 3.2052 16.25 5.00012 16.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.00012 8.25C6.79505 8.25 8.25012 6.79493 8.25012 5C8.25012 3.20507 6.79505 1.75 5.00012 1.75C3.2052 1.75 1.75012 3.20507 1.75012 5C1.75012 6.79493 3.2052 8.25 5.00012 8.25Z"
          fill={fill}
        />
        <path
          d="M13.0001 16.25C14.795 16.25 16.2501 14.7949 16.2501 13C16.2501 11.2051 14.795 9.75 13.0001 9.75C11.2052 9.75 9.75012 11.2051 9.75012 13C9.75012 14.7949 11.2052 16.25 13.0001 16.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridCircle;
