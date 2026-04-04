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
          d="M16.25 5.5C16.25 6.38536 16.1838 7.18313 15.762 7.89268C15.3389 7.92147 14.7376 8.05571 14.3284 8.24019L12.7066 8.97213C12.3528 8.51072 11.8838 8.12711 11.3181 7.8696L11.3156 7.86848L8.54255 6.60227L8.52372 6.59378C7.94232 6.33473 7.34815 6.16393 6.77734 6.09766C6.75166 5.89766 6.75 5.70699 6.75 5.5C6.75 2.87665 8.87665 0.75 11.5 0.75C14.1234 0.75 16.25 2.87665 16.25 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2 9.25H0V16.25H2C2.55228 16.25 3 15.8023 3 15.25V10.25C3 9.69772 2.55228 9.25 2 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.437 12.465L15.254 10.291C15.966 9.97 16.803 10.286 17.125 10.998C17.446 11.71 17.13 12.547 16.418 12.869L9.62701 15.934C8.95101 16.239 8.18601 16.283 7.47901 16.057L3.00101 14.625"
          fill="none"
          stroke={fill}
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.9238 7.1826C16.1292 6.6597 16.25 6.0962 16.25 5.5C16.25 2.877 14.123 0.75 11.5 0.75C8.9274 0.75 6.8444 2.7996 6.7648 5.353"
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

export default HandCheck;
