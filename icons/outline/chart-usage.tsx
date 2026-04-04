import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartUsage({
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
          d="M15.9705 6.9998C16.1525 7.6351 16.25 8.3062 16.25 9C16.25 11.066 15.386 12.929 14 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 14.25C2.614 12.929 1.75 11.066 1.75 9C1.75 4.996 4.996 1.75 9 1.75C10.938 1.75 12.699 2.511 14 3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 8C7.552 8 8 7.552 8 7C8 6.448 7.552 6 7 6C6.448 6 6 6.448 6 7C6 7.552 6.448 8 7 8Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11 12C11.552 12 12 11.552 12 11C12 10.448 11.552 10 11 10C10.448 10 10 10.448 10 11C10 11.552 10.448 12 11 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7 11.25L11 6.75"
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

export default ChartUsage;
