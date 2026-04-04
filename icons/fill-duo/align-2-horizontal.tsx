import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Horizontal({
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
          d="M3 7.75C3 6.78334 3.78393 6 4.75 6H13.25C14.2161 6 15 6.78334 15 7.75V10.25C15 11.2167 14.2161 12 13.25 12H4.75C3.78393 12 3 11.2167 3 10.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 12V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V12H8.25Z"
          fill={fill}
        />
        <path
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V6H9.75V1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Align2Horizontal;
