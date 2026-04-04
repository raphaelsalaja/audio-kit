import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignVertical({
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
          d="M3 4.75C3 3.78334 3.78393 3 4.75 3H6.25C7.21607 3 8 3.78334 8 4.75V13.25C8 14.2167 7.21607 15 6.25 15H4.75C3.78393 15 3 14.2167 3 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 8.25H1.75C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75H3V8.25Z"
          fill={fill}
        />
        <path
          d="M10 6.75C10 5.78334 10.7839 5 11.75 5H13.25C14.2161 5 15 5.78334 15 6.75V11.25C15 12.2167 14.2161 13 13.25 13H11.75C10.7839 13 10 12.2167 10 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M10 8.25H8V9.75H10V8.25Z" fill={fill} />
        <path
          d="M15 9.75H16.25C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25H15V9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AlignVertical;
