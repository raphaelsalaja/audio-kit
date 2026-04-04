import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderLink({
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
          d="M11.5 13C10.9477 13 10.5 13.4477 10.5 14V15C10.5 15.5523 10.9477 16 11.5 16H12C12.4142 16 12.75 16.3358 12.75 16.75C12.75 17.1642 12.4142 17.5 12 17.5H11.5C10.1193 17.5 9 16.3807 9 15V14C9 12.6193 10.1193 11.5 11.5 11.5H12C12.4142 11.5 12.75 11.8358 12.75 12.25C12.75 12.6642 12.4142 13 12 13H11.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.25 12.25C14.25 11.8358 14.5858 11.5 15 11.5H15.5C16.8807 11.5 18 12.6193 18 14V15C18 16.3807 16.8807 17.5 15.5 17.5H15C14.5858 17.5 14.25 17.1642 14.25 16.75C14.25 16.3358 14.5858 16 15 16H15.5C16.0523 16 16.5 15.5523 16.5 15V14C16.5 13.4477 16.0523 13 15.5 13H15C14.5858 13 14.25 12.6642 14.25 12.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.5 15C7.5 15.3453 7.54375 15.6804 7.62602 16H4.25C2.733 16 1.5 14.767 1.5 13.25V4.75C1.5 3.234 2.733 2 4.25 2H6.201C7.039 2 7.821 2.375 8.346 3.029L8.724 3.5H13.75C15.267 3.5 16.5 4.734 16.5 6.25V10.126C16.1804 10.0438 15.8453 10 15.5 10C14.1667 10 12.8333 10 11.5 10C9.29086 10 7.5 11.7909 7.5 14V15ZM3 6.314V4.75C3 4.061 3.561 3.5 4.25 3.5H6.201C6.582 3.5 6.938 3.67 7.176 3.967L7.779 4.719C7.921 4.896 8.136 5 8.364 5H13.75C14.439 5 15 5.561 15 6.25V6.314C14.623 6.12 14.202 6 13.75 6H4.25C3.798 6 3.377 6.12 3 6.314Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 14.5C11.5 14.0858 11.8358 13.75 12.25 13.75H14.75C15.1642 13.75 15.5 14.0858 15.5 14.5C15.5 14.9142 15.1642 15.25 14.75 15.25H12.25C11.8358 15.25 11.5 14.9142 11.5 14.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderLink;
