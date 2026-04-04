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
          d="M3.5 5.75L5 7.25L7.25 3.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1155 4.5615C9.67839 2.3928 7.7984 0.75 5.5 0.75C2.877 0.75 0.75 2.877 0.75 5.5C0.75 7.8071 2.40661 9.6924 4.58771 10.1201"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 15.225C17.25 13.166 17.014 11.586 16.25 11.002C15.375 10.333 13.098 10.164 10.955 10.77L9.62499 7.94301C9.33199 7.31701 8.58799 7.04701 7.96199 7.34001C7.33699 7.63201 7.06599 8.37601 7.35799 9.00101L9.91899 14.457L7.19499 13.956C6.60799 13.848 6.02799 14.18 5.82399 14.741C5.59199 15.378 5.92198 16.081 6.55998 16.31L9.17598 17.251"
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
