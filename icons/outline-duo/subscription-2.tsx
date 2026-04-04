import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Subscription2({
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
          d="M9 16.25C13.004 16.25 16.25 13 16.25 9C16.25 5 13.004 1.75 9 1.75C4.996 1.75 1.75 5 1.75 9C1.75 13 4.996 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 6.25H8.375C7.615 6.25 7 6.87 7 7.62C7 8.38 7.615 9 8.375 9H9.625C10.384 9 11 9.62 11 10.37C11 11.13 10.384 11.75 9.625 11.75H7.25M9 5.25V6.25M9 12.75V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.25L15.71 6.25C14.627 3.61 12.031 1.75 8.99998 1.75C5.06328 1.75 1.85929 4.89165 1.75269 8.79895"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 14.75L2.28999 11.75C3.37299 14.39 5.969 16.25 9 16.25C12.9367 16.25 16.1407 13.1083 16.2473 9.20093"
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

export default Subscription2;
