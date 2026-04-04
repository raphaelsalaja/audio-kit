import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2Ban({
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
          d="M10.75 7.75V2.5C10.75 1.81 10.186 1.25 9.5 1.25C8.814 1.25 8.25 1.81 8.25 2.5V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.75V3.75C13.25 3.06 12.686 2.5 12 2.5C11.314 2.5 10.75 3.06 10.75 3.75V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.751 8.0001V5.25C15.751 4.56 15.187 4 14.501 4C13.815 4 13.251 4.56 13.251 5.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25002 7.75V3.75C8.25002 3.06 7.68602 2.5 7.00002 2.5C6.31402 2.5 5.75002 3.06 5.75002 3.75V11.215L3.98202 8.963C3.55602 8.42 2.76702 8.328 2.22702 8.752C1.68702 9.176 1.62302 9.883 2.01602 10.507L3.97602 13.521C4.92362 14.978 6.44832 15.9318 8.14122 16.1765"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 17.25C15.7949 17.25 17.25 15.7949 17.25 14C17.25 12.2051 15.7949 10.75 14 10.75C12.2051 10.75 10.75 12.2051 10.75 14C10.75 15.7949 12.2051 17.25 14 17.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.702 16.298L16.292 11.708"
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

export default Hand2Ban;
