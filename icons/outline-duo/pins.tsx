import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pins({
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
          d="M7.25 3.25C10.2875 3.25 12.7498 5.65969 12.75 8.62891C12.75 12.6634 8.7014 15.8017 7.25 16.25C5.7986 15.8017 1.75 12.6634 1.75 8.62891C1.75022 5.65969 4.21253 3.25 7.25 3.25ZM7.25 7C6.2835 7 5.5 7.784 5.5 8.75C5.5 9.716 6.2835 10.5 7.25 10.5C8.2165 10.5 9 9.716 9 8.75C9 7.784 8.2165 7 7.25 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.25 10.5C8.2165 10.5 9 9.716 9 8.75C9 7.784 8.2165 7 7.25 7C6.2835 7 5.5 7.784 5.5 8.75C5.5 9.716 6.2835 10.5 7.25 10.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.743 8.49371C16.0531 7.81331 16.25 7.07869 16.25 6.30179C16.25 4.08819 14.5112 2.2461 12.2095 1.8382"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 16.25C8.7014 15.8017 12.75 12.6638 12.75 8.6293C12.75 5.6599 10.2876 3.25 7.25 3.25C4.2124 3.25 1.75 5.6599 1.75 8.6293C1.75 12.6638 5.7986 15.8017 7.25 16.25Z"
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

export default Pins;
