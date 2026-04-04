import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPause({
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
          d="M5.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H5.25C5.80228 15.25 6.25 14.8023 6.25 14.25V3.75C6.25 3.19772 5.80228 2.75 5.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H12.75C12.1977 2.75 11.75 3.19772 11.75 3.75V14.25C11.75 14.8023 12.1977 15.25 12.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H5.25C5.80228 15.25 6.25 14.8023 6.25 14.25V3.75C6.25 3.19772 5.80228 2.75 5.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H12.75C12.1977 2.75 11.75 3.19772 11.75 3.75V14.25C11.75 14.8023 12.1977 15.25 12.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
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

export default MediaPause;
