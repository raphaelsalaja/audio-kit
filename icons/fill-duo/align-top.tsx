import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignTop({
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
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 6.75C3 5.78334 3.78393 5 4.75 5H6.25C7.21607 5 8 5.78334 8 6.75V14.25C8 15.2167 7.21607 16 6.25 16H4.75C3.78393 16 3 15.2167 3 14.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 6.75C10 5.78334 10.7839 5 11.75 5H13.25C14.2161 5 15 5.78334 15 6.75V10.25C15 11.2167 14.2161 12 13.25 12H11.75C10.7839 12 10 11.2167 10 10.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignTop;
