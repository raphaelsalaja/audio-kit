import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowKey({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16L6.24836 15.995C6.66236 15.995 6.99836 15.659 6.99836 15.245C6.99836 14.831 6.66236 14.495 6.24836 14.495L3.75 14.5C3.061 14.5 2.5 13.939 2.5 13.25V8H15.5V11.2487C15.5 11.6627 15.836 11.9987 16.25 11.9987C16.664 11.9987 17 11.6627 17 11.2487V4.75C17 3.233 15.767 2 14.25 2ZM4 6C3.448 6 3 5.552 3 5C3 4.448 3.448 4 4 4C4.552 4 5 4.448 5 5C5 5.552 4.552 6 4 6ZM7 6C6.448 6 6 5.552 6 5C6 4.448 6.448 4 7 4C7.552 4 8 4.448 8 5C8 5.552 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M8.5 14.25C8.5 12.7312 9.73119 11.5 11.25 11.5C12.5088 11.5 13.57 12.3457 13.8965 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H16.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75V15H13.8965C13.57 16.1543 12.5088 17 11.25 17C9.73119 17 8.5 15.7688 8.5 14.25ZM11.25 13C10.5596 13 10 13.5596 10 14.25C10 14.9404 10.5596 15.5 11.25 15.5C11.9404 15.5 12.5 14.9404 12.5 14.25C12.5 13.5596 11.9404 13 11.25 13Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WindowKey;
