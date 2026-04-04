import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardClock({
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
          d="M6.25 3.25V2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H8.3588C8.4647 16.25 8.6566 16.0814 8.6232 15.9955C8.3822 15.3768 8.25 14.7042 8.25 14C8.25 10.962 10.7124 8.5 13.75 8.5C14.043 8.5 14.3307 8.5228 14.6114 8.5672C14.6578 8.5745 14.7059 8.5137 14.75 8.4353V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75V3.25C11.75 3.802 11.3023 4.25 10.75 4.25H7.25C6.6977 4.25 6.25 3.802 6.25 3.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 7.83031V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H7.9191"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 1.25H7.25C6.698 1.25 6.25 1.698 6.25 2.25V3.25C6.25 3.802 6.698 4.25 7.25 4.25H10.75C11.302 4.25 11.75 3.802 11.75 3.25V2.25C11.75 1.698 11.302 1.25 10.75 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 11.75H7.9191"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 8.75H10.3621"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10C11.5439 10 9.75 11.7944 9.75 14C9.75 16.2056 11.5439 18 13.75 18C15.9561 18 17.75 16.2056 17.75 14C17.75 11.7944 15.9561 10 13.75 10ZM16.0625 14.9502C15.9434 15.2398 15.6641 15.415 15.3691 15.415C15.2734 15.415 15.1777 15.3969 15.0839 15.3588L13.4648 14.6938C13.1836 14.5781 13 14.3042 13 14V12.25C13 11.8359 13.3359 11.5 13.75 11.5C14.1641 11.5 14.5 11.8359 14.5 12.25V13.4971L15.6543 13.9712C16.0371 14.1284 16.2207 14.5669 16.0625 14.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ClipboardClock;
