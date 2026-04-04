import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand({
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
          d="M9.5 1.25C8.80964 1.25 8.25 1.80964 8.25 2.5V3.25C8.25 2.55964 7.69036 2 7 2C6.30964 2 5.75 2.55964 5.75 3.25V11.215L3.98202 8.963C3.55602 8.42 2.76702 8.328 2.22702 8.752C1.68702 9.176 1.62302 9.883 2.01602 10.507L4.56702 14.431C5.30502 15.566 6.56702 16.251 7.92102 16.251H11.751C13.96 16.251 15.751 14.46 15.751 12.251V4C15.751 3.31 15.187 2.75 14.501 2.75C13.815 2.75 13.251 3.31 13.251 4V8.25L13.25 8.2504V3.25C13.25 2.55964 12.6904 2 12 2C11.3096 2 10.75 2.55964 10.75 3.25V2.5C10.75 1.80964 10.1904 1.25 9.5 1.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 8.25V2.5C10.75 1.81 10.186 1.25 9.5 1.25C8.814 1.25 8.25 1.81 8.25 2.5V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 8.25V3.25C13.25 2.56 12.686 2 12 2C11.314 2 10.75 2.56 10.75 3.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 8.25V3.25C8.25 2.56 7.686 2 7 2C6.314 2 5.75 2.56 5.75 3.25V12.053"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75002 11.215L3.98202 8.963C3.55602 8.42 2.76702 8.328 2.22702 8.752C1.68702 9.176 1.62302 9.883 2.01602 10.507L4.56702 14.431C5.30502 15.566 6.56702 16.251 7.92102 16.251H11.751C13.96 16.251 15.751 14.46 15.751 12.251V4C15.751 3.31 15.187 2.75 14.501 2.75C13.815 2.75 13.251 3.31 13.251 4V8.25"
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

export default Hand;
