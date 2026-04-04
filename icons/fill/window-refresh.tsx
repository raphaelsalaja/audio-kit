import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowRefresh({
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
          d="M16.25 10.5C15.836 10.5 15.5 10.84 15.5 11.25V11.62C14.928 11.23 14.237 11 13.5 11C11.57 11 10 12.5699 10 14.5C10 16.4301 11.57 18 13.5 18C14.46 18 15.388 17.6 16.046 16.9C16.33 16.6 16.316 16.1299 16.015 15.8398C15.714 15.5599 15.239 15.5699 14.954 15.8699C14.573 16.2799 14.057 16.4999 13.5 16.4999C12.397 16.4999 11.5 15.5999 11.5 14.4999C11.5 13.3999 12.397 12.4999 13.5 12.4999C13.994 12.4999 14.44 12.6898 14.795 12.9999H13.75C13.336 12.9999 13 13.3399 13 13.7499C13 14.1599 13.336 14.4999 13.75 14.4999H16.25C16.664 14.4999 17 14.1599 17 13.7499V11.2499C17 10.8399 16.664 10.5 16.25 10.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.8125 14.5H3.75C3.0596 14.5 2.5 13.9404 2.5 13.25V8H16.25C16.6642 8 17 7.6642 17 7.25V4.75C17 3.2312 15.7688 2 14.25 2H3.75C2.2312 2 1 3.2312 1 4.75V13.25C1 14.7688 2.2312 16 3.75 16H7.8125C8.2265 16 8.5625 15.6602 8.5625 15.25C8.5625 14.8398 8.2265 14.5 7.8125 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowRefresh;
