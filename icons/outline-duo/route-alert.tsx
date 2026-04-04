import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RouteAlert({
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
          d="M9 14.75C12.1756 14.75 14.75 12.1756 14.75 9C14.75 5.82436 12.1756 3.25 9 3.25C5.82436 3.25 3.25 5.82436 3.25 9C3.25 12.1756 5.82436 14.75 9 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 14.75C12.1756 14.75 14.75 12.1756 14.75 9C14.75 5.82436 12.1756 3.25 9 3.25C5.82436 3.25 3.25 5.82436 3.25 9C3.25 12.1756 5.82436 14.75 9 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 9H14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1 9H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.5C9.41421 12.5 9.75 12.1642 9.75 11.75C9.75 11.3358 9.41421 11 9 11C8.58579 11 8.25 11.3358 8.25 11.75C8.25 12.1642 8.58579 12.5 9 12.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default RouteAlert;
