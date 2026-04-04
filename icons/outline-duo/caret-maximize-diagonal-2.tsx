import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal2({
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
          d="M14.25 9.35399V14C14.25 14.138 14.138 14.25 14 14.25H9.35399C9.13099 14.25 9.01999 13.981 9.17699 13.823L13.823 9.17699C13.98 9.01999 14.25 9.13099 14.25 9.35399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 9.35399V14C14.25 14.138 14.138 14.25 14 14.25H9.35399C9.13099 14.25 9.01999 13.981 9.17699 13.823L13.823 9.17699C13.98 9.01999 14.25 9.13099 14.25 9.35399Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 8.646V4C3.75 3.862 3.862 3.75 4 3.75H8.646C8.869 3.75 8.98 4.019 8.823 4.177L4.177 8.823C4.02 8.98 3.75 8.869 3.75 8.646Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 8.646V4C3.75 3.862 3.862 3.75 4 3.75H8.646C8.869 3.75 8.98 4.019 8.823 4.177L4.177 8.823C4.02 8.98 3.75 8.869 3.75 8.646Z"
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

export default CaretMaximizeDiagonal2;
