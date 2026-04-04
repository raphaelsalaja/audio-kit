import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOld({
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
          d="M11.75 3.75H6.25C5.69772 3.75 5.25 4.19772 5.25 4.75V16.25C5.25 16.8023 5.69772 17.25 6.25 17.25H11.75C12.3023 17.25 12.75 16.8023 12.75 16.25V4.75C12.75 4.19772 12.3023 3.75 11.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 3.75H6.25C5.69772 3.75 5.25 4.19772 5.25 4.75V16.25C5.25 16.8023 5.69772 17.25 6.25 17.25H11.75C12.3023 17.25 12.75 16.8023 12.75 16.25V4.75C12.75 4.19772 12.3023 3.75 11.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 12.5C8.16421 12.5 8.5 12.1642 8.5 11.75C8.5 11.3358 8.16421 11 7.75 11C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 12.5C10.6642 12.5 11 12.1642 11 11.75C11 11.3358 10.6642 11 10.25 11C9.83579 11 9.5 11.3358 9.5 11.75C9.5 12.1642 9.83579 12.5 10.25 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.75 15C8.16421 15 8.5 14.6642 8.5 14.25C8.5 13.8358 8.16421 13.5 7.75 13.5C7.33579 13.5 7 13.8358 7 14.25C7 14.6642 7.33579 15 7.75 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 15C10.6642 15 11 14.6642 11 14.25C11 13.8358 10.6642 13.5 10.25 13.5C9.83579 13.5 9.5 13.8358 9.5 14.25C9.5 14.6642 9.83579 15 10.25 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 0.75V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 8.25H7.75V9.25H10.25V8.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PhoneOld;
