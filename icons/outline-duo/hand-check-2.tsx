import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandCheck2({
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
          d="M9.57099 7.84011C9.981 7.13938 10.216 6.32377 10.216 5.45329C10.216 2.83932 8.09697 0.720284 5.483 0.720284C2.86904 0.720284 0.75 2.83932 0.75 5.45329C0.75 8.06725 2.86904 10.1863 5.483 10.1863C6.26987 10.1863 7.01189 9.99427 7.66476 9.65453L7.358 9.001C7.066 8.376 7.337 7.632 7.962 7.34C8.55255 7.06359 9.24811 7.28823 9.57099 7.84011Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.5 5.75L5 7.25L7.25 3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 15.225C17.25 13.166 17.014 11.586 16.25 11.002C15.375 10.333 13.098 10.164 10.955 10.77L9.62499 7.943C9.33199 7.317 8.58799 7.047 7.96199 7.34C7.33699 7.632 7.06599 8.376 7.35799 9.001L9.91899 14.457L7.19499 13.956C6.60799 13.848 6.02799 14.18 5.82399 14.741C5.59199 15.378 5.92199 16.081 6.55999 16.31L9.17599 17.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1155 4.5615C9.67839 2.3928 7.7984 0.75 5.5 0.75C2.877 0.75 0.75 2.877 0.75 5.5C0.75 7.8071 2.40661 9.6924 4.58771 10.1201"
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

export default HandCheck2;
