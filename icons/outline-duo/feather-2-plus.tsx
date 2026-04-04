import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2Plus({
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
          d="M4.75 14V9.732C4.75 9.202 4.961 8.693 5.336 8.318L10.22 3.434C11.627 2.027 13.909 2.027 15.316 3.434C16.723 4.841 16.723 7.123 15.316 8.53L10.432 13.414C10.057 13.789 9.548 14 9.018 14H8.285"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 1V5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 3.25H1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 14V9.73199C4.75 9.20199 4.961 8.69299 5.336 8.31799L10.22 3.434C11.627 2.027 13.909 2.027 15.316 3.434C16.723 4.841 16.723 7.123 15.316 8.53L10.432 13.414C10.057 13.789 9.54801 14 9.01801 14H8.951"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.5 16.25L9.25 9.5"
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

export default Feather2Plus;
