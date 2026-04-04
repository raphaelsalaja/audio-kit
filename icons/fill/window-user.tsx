import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowUser({
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
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={secondaryfill}
        />
        <path
          d="M16.101 18H11.8989C11.4922 18 11.1084 17.8013 10.8716 17.4683C10.6392 17.1407 10.5786 16.7207 10.7095 16.3453C11.1978 14.943 12.52 14.0001 14 14.0001C15.48 14.0001 16.8022 14.943 17.291 16.3458C17.4214 16.7208 17.3608 17.1407 17.1284 17.4684C16.8916 17.8014 16.5077 18 16.101 18Z"
          fill={secondaryfill}
        />
        <path
          d="M8.73441 14.5H3.75C3.0596 14.5 2.5 13.9404 2.5 13.25V8H16.25C16.6642 8 17 7.6642 17 7.25V4.75C17 3.2312 15.7688 2 14.25 2H3.75C2.2312 2 1 3.2312 1 4.75V13.25C1 14.7688 2.2312 16 3.75 16H8.73441C9.14841 16 9.48441 15.6602 9.48441 15.25C9.48441 14.8398 9.14841 14.5 8.73441 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowUser;
