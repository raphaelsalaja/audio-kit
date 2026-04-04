import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Promotion({
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
          d="M14.25 16.25L9 12.75L3.75 16.25V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 16.25L9 12.75L3.75 16.25V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 11C11.5523 11 12 10.5523 12 10C12 9.44772 11.5523 9 11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 10.25L11 5.75"
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

export default Promotion;
