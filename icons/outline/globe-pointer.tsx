import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GlobePointer({
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
          d="M9.42389 16.1918C9.12129 16.2302 8.8129 16.25 8.5 16.25C4.496 16.25 1.25 13.004 1.25 9C1.25 4.996 4.496 1.75 8.5 1.75C12.504 1.75 15.75 4.996 15.75 9C15.75 9.0876 15.7485 9.1748 15.7454 9.2616"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9C15.75 7.343 12.504 6 8.5 6C4.496 6 1.25 7.343 1.25 9C1.25 10.5718 4.17251 11.8618 7.89291 11.9897"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.458 7.78271C11.2184 4.35851 9.9851 1.75 8.5 1.75C6.843 1.75 5.5 4.996 5.5 9C5.5 13.004 6.843 16.25 8.5 16.25"
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

export default GlobePointer;
