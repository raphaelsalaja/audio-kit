import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockMinus({
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
          d="M9 13.75C9 12.5093 10.0093 11.5 11.25 11.5H16.0075C16.2947 10.7197 16.25 9.8799 16.25 9C16.25 4.9958 13.0041 1.75 9 1.75C4.9959 1.75 1.75 4.9958 1.75 9C1.75 13.0042 4.996 16.25 9 16.25C9.2982 16.25 9.98793 16.4491 9.98793 15.6211C9.39248 15.2189 9 14.5223 9 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75V9L5.75 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0117 10.75C16.1531 10.1873 16.25 9.6067 16.25 9C16.25 4.9958 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9958 1.75 9C1.75 13.0042 4.996 16.25 9 16.25C9.1871 16.25 9.37049 16.2361 9.55389 16.2222"
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

export default ClockMinus;
