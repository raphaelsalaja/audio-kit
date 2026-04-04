import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyExchange({
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
          d="M9 9.75C11.071 9.75 12.75 8.855 12.75 7.75C12.75 6.645 11.071 5.75 9 5.75C6.929 5.75 5.25 6.645 5.25 7.75C5.25 8.855 6.929 9.75 9 9.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 7.75V10.25C5.25 11.355 6.929 12.25 9 12.25C11.071 12.25 12.75 11.355 12.75 10.25V7.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.25L2.28999 6.25C3.37299 3.61 5.969 1.75 9 1.75C12.9367 1.75 16.1407 4.89171 16.2473 8.79901"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 14.75L15.71 11.75C14.627 14.39 12.031 16.25 8.99998 16.25C5.06328 16.25 1.85929 13.1083 1.75269 9.20093"
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

export default CurrencyExchange;
