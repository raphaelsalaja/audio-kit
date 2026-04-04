import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad3({
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
          d="M15.625 14.245C14.992 14.297 14.4383 13.952 14.1713 13.435L13 12H5.13702L3.80638 13.4734C3.53228 13.9681 2.99212 14.2957 2.37497 14.245C1.57397 14.18 0.994971 13.44 0.999971 12.636C1.00797 11.45 1.16897 10.009 1.45797 8.375C2.12897 4.588 3.57597 2.75 5.49997 2.75C6.38497 2.75 7.17197 3.14 7.72097 3.75H8.99997H10.279C10.828 3.14 11.615 2.75 12.5 2.75C14.424 2.75 15.871 4.588 16.542 8.375C16.832 10.009 16.992 11.451 17 12.636C17.006 13.44 16.427 14.18 15.625 14.245Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 8C11.1642 8 11.5 7.66421 11.5 7.25C11.5 6.83579 11.1642 6.5 10.75 6.5C10.3358 6.5 10 6.83579 10 7.25C10 7.66421 10.3358 8 10.75 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 8C14.1642 8 14.5 7.66421 14.5 7.25C14.5 6.83579 14.1642 6.5 13.75 6.5C13.3358 6.5 13 6.83579 13 7.25C13 7.66421 13.3358 8 13.75 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 6.75C12.6642 6.75 13 6.41421 13 6C13 5.58579 12.6642 5.25 12.25 5.25C11.8358 5.25 11.5 5.58579 11.5 6C11.5 6.41421 11.8358 6.75 12.25 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 9.25C12.6642 9.25 13 8.91421 13 8.5C13 8.08579 12.6642 7.75 12.25 7.75C11.8358 7.75 11.5 8.08579 11.5 8.5C11.5 8.91421 11.8358 9.25 12.25 9.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 6V8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.25H4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.22998 11.75H11.769"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 13C6.57843 13 7.25 12.3284 7.25 11.5C7.25 10.6716 6.57843 10 5.75 10C4.92157 10 4.25 10.6716 4.25 11.5C4.25 12.3284 4.92157 13 5.75 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 13C13.0784 13 13.75 12.3284 13.75 11.5C13.75 10.6716 13.0784 10 12.25 10C11.4216 10 10.75 10.6716 10.75 11.5C10.75 12.3284 11.4216 13 12.25 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.6761 14.0001C14.9435 14.1794 15.2716 14.274 15.625 14.245C16.427 14.18 17.006 13.44 17 12.636C16.992 11.451 16.832 10.009 16.542 8.375C15.871 4.588 14.424 2.75 12.5 2.75C11.615 2.75 10.828 3.14 10.279 3.75H7.72099C7.17199 3.14 6.385 2.75 5.5 2.75C3.576 2.75 2.12899 4.588 1.45799 8.375C1.16899 10.009 1.008 11.45 1 12.636C0.995004 13.44 1.574 14.18 2.375 14.245C2.7281 14.274 3.0559 14.1792 3.3232 14.0001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Gamepad3;
