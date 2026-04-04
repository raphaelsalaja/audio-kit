import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NotebookClock({
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
          d="M3.25 3.75C3.25 2.645 4.145 1.75 5.25 1.75H7.25V16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V3.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.414 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V3.75C3.25 2.645 4.145 1.75 5.25 1.75H12.75C13.855 1.75 14.75 2.645 14.75 3.75V6.83051"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 12.25H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 9C11.5439 9 9.75 10.7944 9.75 13C9.75 15.2056 11.5439 17 13.75 17C15.9561 17 17.75 15.2056 17.75 13C17.75 10.7944 15.9561 9 13.75 9ZM16.0625 13.9502C15.9434 14.2398 15.6641 14.415 15.3691 14.415C15.2734 14.415 15.1777 14.3969 15.0839 14.3588L13.4648 13.6938C13.1836 13.5781 13 13.3042 13 13V11.25C13 10.8359 13.3359 10.5 13.75 10.5C14.1641 10.5 14.5 10.8359 14.5 11.25V12.4971L15.6543 12.9712C16.0371 13.1284 16.2207 13.5669 16.0625 13.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default NotebookClock;
