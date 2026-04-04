import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandCheck({
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
          d="M10.437 12.465L15.254 10.291C15.966 9.97001 16.803 10.286 17.125 10.998C17.446 11.71 17.13 12.547 16.418 12.869L9.62697 15.934C8.95097 16.239 8.18597 16.283 7.47897 16.057L3.00098 14.625"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.9238 7.1826C16.1292 6.6597 16.25 6.0962 16.25 5.5C16.25 2.877 14.123 0.75 11.5 0.75C8.92737 0.75 6.84437 2.7996 6.76477 5.353"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.245 11.598L9.216 12.492C9.927 12.815 10.765 12.5 11.088 11.789C11.411 11.078 11.096 10.24 10.385 9.917L7.608 8.649C5.312 7.626 3.375 9.188 3 11.001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.25H2C2.552 9.25 3 9.698 3 10.25V15.25C3 15.802 2.552 16.25 2 16.25H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 5.75L11 7.25L13.25 3.75"
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

export default HandCheck;
