import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudRefresh({
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
          d="M9.25 13.75H11.75V11.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 16.387C10.499 16.918 9.788 17.25 9 17.25C7.481 17.25 6.25 16.019 6.25 14.5C6.25 12.981 7.481 11.75 9 11.75C10.166 11.75 11.162 12.476 11.563 13.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 13.4937C15.6589 12.8094 16.25 11.7251 16.25 10.5C16.25 8.7639 15.065 7.31791 13.464 6.89111C13.278 4.57711 11.362 2.75 9 2.75C6.515 2.75 4.5 4.7651 4.5 7.25C4.5 7.6001 4.549 7.93598 4.624 8.26288C3.027 8.32998 1.75 9.6369 1.75 11.25C1.75 12.3745 2.3711 13.3518 3.287 13.8655"
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

export default CloudRefresh;
