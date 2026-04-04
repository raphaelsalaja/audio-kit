import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowBan({
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
          d="M14 10C11.794 10 10 11.79 10 14C10 16.21 11.794 18 14 18C16.206 18 18 16.21 18 14C18 11.79 16.206 10 14 10ZM14 11.5C14.416 11.5 14.802 11.61 15.147 11.79L11.792 15.15C11.612 14.8 11.5 14.42 11.5 14C11.5 12.62 12.621 11.5 14 11.5ZM14 16.5C13.584 16.5 13.198 16.39 12.853 16.21L16.208 12.85C16.388 13.2 16.5 13.58 16.5 14C16.5 15.38 15.379 16.5 14 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.89059 14.5H3.75C3.0596 14.5 2.5 13.9404 2.5 13.25V8H16.25C16.6642 8 17 7.6642 17 7.25V4.75C17 3.2312 15.7688 2 14.25 2H3.75C2.2312 2 1 3.2312 1 4.75V13.25C1 14.7688 2.2312 16 3.75 16H7.89059C8.30459 16 8.64059 15.6602 8.64059 15.25C8.64059 14.8398 8.30459 14.5 7.89059 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowBan;
