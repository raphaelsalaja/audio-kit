import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ring({
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
          d="M8.63299 4.26199L6.78299 1.80599L7.77699 0.748993H10.223L11.217 1.80599L9.36699 4.26199"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.63299 4.26199L6.78299 1.80599L7.77699 0.748993H10.223L11.217 1.80599L9.36699 4.26199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25C12.0376 15.25 14.5 12.7876 14.5 9.75C14.5 6.71243 12.0376 4.25 9 4.25C5.96243 4.25 3.5 6.71243 3.5 9.75C3.5 12.7876 5.96243 15.25 9 15.25Z"
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

export default Ring;
