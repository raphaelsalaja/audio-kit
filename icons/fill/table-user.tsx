import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableUser({
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
          d="M8.4265 14.5H6.5V8H3.5V6.5H6.5V3.5H8V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H4.75C3.2312 2 2 3.2312 2 4.75V13.25C2 14.7688 3.2312 16 4.75 16H8.4265C8.8405 16 9.1765 15.6602 9.1765 15.25C9.1765 14.8398 8.8405 14.5 8.4265 14.5Z"
          fill={fill}
        />
        <path
          d="M14 12C14.8284 12 15.5 11.3284 15.5 10.5C15.5 9.67157 14.8284 9 14 9C13.1716 9 12.5 9.67157 12.5 10.5C12.5 11.3284 13.1716 12 14 12Z"
          fill={secondaryfill}
        />
        <path
          d="M16.101 17H11.8989C11.4922 17 11.1084 16.8013 10.8716 16.4683C10.6392 16.1407 10.5786 15.7207 10.7095 15.3453C11.1978 13.943 12.52 13.0001 14 13.0001C15.48 13.0001 16.8022 13.943 17.291 15.3458C17.4214 15.7208 17.3608 16.1407 17.1284 16.4684C16.8916 16.8014 16.5077 17 16.101 17Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableUser;
