import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderCloud({
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
          d="M11.3471 13.0046C11.9051 11.8246 13.099 11 14.5 11C16.433 11 18 12.5671 18 14.5C18 16.4329 16.433 18 14.5 18H11.5C10.1193 18 9 16.8807 9 15.5C9 14.1706 10.0376 13.0836 11.3471 13.0046Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.53095 16C7.51052 15.8362 7.5 15.6693 7.5 15.5C7.5 13.6717 8.72597 12.1306 10.4013 11.653C11.2959 10.3609 12.7873 9.5 14.5 9.5C15.2111 9.5 15.8875 9.64845 16.5 9.91605V6.25C16.5 4.734 15.267 3.5 13.75 3.5H8.724L8.346 3.029C7.821 2.375 7.039 2 6.201 2H4.25C2.733 2 1.5 3.234 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H7.53095ZM3 4.75V6.314C3.377 6.12 3.798 6 4.25 6H13.75C14.202 6 14.623 6.12 15 6.314V6.25C15 5.561 14.439 5 13.75 5H8.364C8.136 5 7.921 4.896 7.779 4.719L7.176 3.967C6.938 3.67 6.582 3.5 6.201 3.5H4.25C3.561 3.5 3 4.061 3 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderCloud;
