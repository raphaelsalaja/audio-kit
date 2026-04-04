import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScanCode({
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
          d="M4.75 3.5C4.05921 3.5 3.5 4.05921 3.5 4.75V6.25C3.5 6.66421 3.16421 7 2.75 7C2.33579 7 2 6.66421 2 6.25V4.75C2 3.23079 3.23079 2 4.75 2H6.75C7.16421 2 7.5 2.33579 7.5 2.75C7.5 3.16421 7.16421 3.5 6.75 3.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5 2.75C10.5 2.33579 10.8358 2 11.25 2H13.25C14.7692 2 16 3.23079 16 4.75V6.25C16 6.66421 15.6642 7 15.25 7C14.8358 7 14.5 6.66421 14.5 6.25V4.75C14.5 4.05921 13.9408 3.5 13.25 3.5H11.25C10.8358 3.5 10.5 3.16421 10.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 11C15.6642 11 16 11.3358 16 11.75V13.25C16 14.7692 14.7692 16 13.25 16H11.25C10.8358 16 10.5 15.6642 10.5 15.25C10.5 14.8358 10.8358 14.5 11.25 14.5H13.25C13.9408 14.5 14.5 13.9408 14.5 13.25V11.75C14.5 11.3358 14.8358 11 15.25 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 11C3.16421 11 3.5 11.3358 3.5 11.75V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H6.75C7.16421 14.5 7.5 14.8358 7.5 15.25C7.5 15.6642 7.16421 16 6.75 16H4.75C3.23079 16 2 14.7692 2 13.25V11.75C2 11.3358 2.33579 11 2.75 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 5.75C5 5.33579 5.33579 5 5.75 5H7.75C8.16421 5 8.5 5.33579 8.5 5.75V7.75C8.5 8.16421 8.16421 8.5 7.75 8.5H5.75C5.33579 8.5 5 8.16421 5 7.75V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 5.75C9.5 5.33579 9.83579 5 10.25 5H12.25C12.6642 5 13 5.33579 13 5.75V7.75C13 8.16421 12.6642 8.5 12.25 8.5H10.25C9.83579 8.5 9.5 8.16421 9.5 7.75V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 10.25C5 9.83579 5.33579 9.5 5.75 9.5H7.75C8.16421 9.5 8.5 9.83579 8.5 10.25V12.25C8.5 12.6642 8.16421 13 7.75 13H5.75C5.33579 13 5 12.6642 5 12.25V10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 10.25C9.5 9.83579 9.83579 9.5 10.25 9.5H12.25C12.6642 9.5 13 9.83579 13 10.25V12.25C13 12.6642 12.6642 13 12.25 13H10.25C9.83579 13 9.5 12.6642 9.5 12.25V10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ScanCode;
