import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderClock({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75V9.2373C15.5972 9.14887 15.4195 9.1597 15.2578 9.08594C14.5552 8.65189 13.8128 8.5 13 8.5C9.96251 8.5 7.5 10.9623 7.5 14C7.5 14.3777 7.53873 14.7464 7.61142 15.1027C7.63599 15.2232 7.43297 15.25 7.31005 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.51599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.726 8.51599C15.609 7.52299 14.774 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H6.8766"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 10C10.7939 10 9 11.7944 9 14C9 16.2056 10.7939 18 13 18C15.2061 18 17 16.2056 17 14C17 11.7944 15.2061 10 13 10ZM15.3125 14.9502C15.1934 15.2398 14.9141 15.415 14.6191 15.415C14.5234 15.415 14.4277 15.3969 14.3339 15.3588L12.7148 14.6938C12.4336 14.5781 12.25 14.3042 12.25 14V12.25C12.25 11.8359 12.5859 11.5 13 11.5C13.4141 11.5 13.75 11.8359 13.75 12.25V13.4971L14.9043 13.9712C15.2871 14.1284 15.4707 14.5669 15.3125 14.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderClock;
