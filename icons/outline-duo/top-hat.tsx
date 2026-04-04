import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TopHat({
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
          d="M4.16729 10.75H13.8332C13.7988 10.0883 13.7801 9.40033 13.781 8.68798C13.784 6.91898 13.908 5.30198 14.091 3.86698C14.167 3.27198 13.7 2.75098 13.1 2.75098H9H4.9C4.3 2.75098 3.833 3.27198 3.909 3.86698C4.092 5.30298 4.216 6.91998 4.219 8.68798C4.22024 9.40026 4.20164 10.0883 4.16729 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.25 14.75C13.979 13.025 13.778 10.983 13.781 8.68798C13.784 6.91898 13.908 5.30198 14.091 3.86698C14.167 3.27198 13.7 2.75098 13.1 2.75098H9H4.9C4.3 2.75098 3.833 3.27198 3.909 3.86698C4.092 5.30298 4.216 6.91998 4.219 8.68798C4.223 10.983 4.021 13.026 3.75 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.16699 10.75H13.833"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 12.75C16.75 13.855 15.855 14.75 14.75 14.75H9H3.25C2.145 14.75 1.25 13.855 1.25 12.75"
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

export default TopHat;
