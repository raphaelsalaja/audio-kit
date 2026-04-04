import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal({
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
          d="M8.646 14.25H4C3.862 14.25 3.75 14.138 3.75 14V9.35399C3.75 9.13099 4.019 9.01999 4.177 9.17699L8.823 13.823C8.98 13.98 8.869 14.25 8.646 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.646 14.25H4C3.862 14.25 3.75 14.138 3.75 14V9.35399C3.75 9.13099 4.019 9.01999 4.177 9.17699L8.823 13.823C8.98 13.98 8.869 14.25 8.646 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.35399 3.75H14C14.138 3.75 14.25 3.862 14.25 4V8.646C14.25 8.869 13.981 8.98 13.823 8.823L9.17699 4.177C9.01999 4.02 9.13099 3.75 9.35399 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.35399 3.75H14C14.138 3.75 14.25 3.862 14.25 4V8.646C14.25 8.869 13.981 8.98 13.823 8.823L9.17699 4.177C9.01999 4.02 9.13099 3.75 9.35399 3.75Z"
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

export default CaretMaximizeDiagonal;
