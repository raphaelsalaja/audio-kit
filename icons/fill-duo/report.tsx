import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Report({
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
          d="M15.487 5.427L11.572 1.512C11.2442 1.1841 10.7996 1 10.336 1H4.75C3.2312 1 2 2.2312 2 3.75V14.25C2 15.7688 3.2312 17 4.75 17H13.25C14.7688 17 16 15.7688 16 14.25V6.6655C16 6.2009 15.8155 5.7553 15.487 5.427Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 9.75C6.66421 9.75 7 10.0858 7 10.5V13.25C7 13.6642 6.66421 14 6.25 14C5.83579 14 5.5 13.6642 5.5 13.25V10.5C5.5 10.0858 5.83579 9.75 6.25 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 11C12.1642 11 12.5 11.3358 12.5 11.75V13.25C12.5 13.6642 12.1642 14 11.75 14C11.3358 14 11 13.6642 11 13.25V11.75C11 11.3358 11.3358 11 11.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8691 6.00098H12C11.45 6.00098 11 5.55098 11 5.00098V1.13101C11.212 1.21806 11.4068 1.34677 11.572 1.512L15.487 5.427C15.6528 5.59266 15.7819 5.7882 15.8691 6.00098Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Report;
