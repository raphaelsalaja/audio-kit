import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingKey({
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
          d="M7.25 5.75C8.35457 5.75 9.25 4.85457 9.25 3.75C9.25 2.64543 8.35457 1.75 7.25 1.75C6.14543 1.75 5.25 2.64543 5.25 3.75C5.25 4.85457 6.14543 5.75 7.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M0 10.25C0 9.69772 0.447715 9.25 1 9.25H2C2.55228 9.25 3 9.69772 3 10.25V15.25C3 15.8023 2.55228 16.25 2 16.25H1C0.447715 16.25 0 15.8023 0 15.25V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 5.75C8.35457 5.75 9.25 4.85457 9.25 3.75C9.25 2.64543 8.35457 1.75 7.25 1.75C6.14543 1.75 5.25 2.64543 5.25 3.75C5.25 4.85457 6.14543 5.75 7.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 3.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 3.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.437 12.465L15.254 10.291C15.966 9.97001 16.803 10.286 17.125 10.998C17.446 11.71 17.13 12.547 16.418 12.869L9.62701 15.934C8.95101 16.239 8.18601 16.283 7.47901 16.057L3.00101 14.625"
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
      </g>
    </svg>
  );
}

export default HandHoldingKey;
