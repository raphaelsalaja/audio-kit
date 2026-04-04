import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignHorizontal({
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
          d="M3 11.75C3 10.7835 3.78349 10 4.75 10H13.25C14.2165 10 15 10.7835 15 11.75V13.25C15 14.2165 14.2165 15 13.25 15H4.75C3.78349 15 3 14.2165 3 13.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 15V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V15H8.25Z"
          fill={fill}
        />
        <path
          d="M5 4.75C5 3.78349 5.78349 3 6.75 3H11.25C12.2165 3 13 3.78349 13 4.75V6.25C13 7.21651 12.2165 8 11.25 8H6.75C5.78349 8 5 7.21651 5 6.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V3H9.75V1.75Z"
          fill={fill}
        />
        <path d="M8.25 8H9.75V10H8.25V8Z" fill={fill} />
      </g>
    </svg>
  );
}

export default AlignHorizontal;
