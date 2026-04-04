import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheckPlus2({
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
          d="M10.038 15.164C9.69999 15.221 9.354 15.25 9 15.25C5.548 15.25 2.75 12.452 2.75 9C2.75 5.548 5.548 2.75 9 2.75C12.452 2.75 15.25 5.548 15.25 9C15.25 9.354 15.221 9.69999 15.164 10.038C15.03 10.013 14.891 10 14.75 10C13.507 10 12.5 11.007 12.5 12.25V12.5H12.25C11.007 12.5 10 13.507 10 14.75C10 14.891 10.013 15.03 10.038 15.164Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 17.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 7.673L9.01901 10.75L15.25 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2432 9.29111C15.2477 9.19461 15.2499 9.0976 15.2499 9C15.2499 8.5842 15.2086 8.17819 15.1306 7.78529"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.1475 3.1349C10.4779 2.8878 9.7555 2.75 9 2.75C5.548 2.75 2.75 5.548 2.75 9C2.75 12.452 5.548 15.25 9 15.25C9.0978 15.25 9.19521 15.2477 9.29211 15.2433"
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

export default CircleCheckPlus2;
