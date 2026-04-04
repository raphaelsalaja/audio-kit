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
          d="M2 3.75C2 2.78334 2.78393 2 3.75 2H5.25C6.21607 2 7 2.78334 7 3.75V14.25C7 15.2167 6.21607 16 5.25 16H3.75C2.78393 16 2 15.2167 2 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 3.75C11 2.78334 11.7839 2 12.75 2H14.25C15.2161 2 16 2.78334 16 3.75V14.25C16 15.2167 15.2161 16 14.25 16H12.75C11.7839 16 11 15.2167 11 14.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaPause;
