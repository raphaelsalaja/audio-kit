import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WidthMax({
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
          d="M1.5 11.7586C1.5 10.7953 2.28281 10.0086 3.25 10.0086L14.75 10.0086C15.7172 10.0086 16.5 10.7953 16.5 11.7586V14.25C16.5 15.2132 15.7172 16 14.75 16H3.25C2.28281 16 1.5 15.2132 1.5 14.25L1.5 11.7586Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 1.5C2.66421 1.5 3 1.83579 3 2.25V7.5C3 7.91421 2.66421 8.25 2.25 8.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 1.5C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25C15.3358 8.25 15 7.91421 15 7.5V2.25C15 1.83579 15.3358 1.5 15.75 1.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2803 2.21967C10.9874 1.92678 10.5126 1.92678 10.2197 2.21967C9.92678 2.51256 9.92678 2.98744 10.2197 3.28033L10.9393 4H5.25C4.83579 4 4.5 4.33579 4.5 4.75C4.5 5.16421 4.83579 5.5 5.25 5.5H10.9393L10.2197 6.21967C9.92678 6.51256 9.92678 6.98744 10.2197 7.28033C10.5126 7.57322 10.9874 7.57322 11.2803 7.28033L13.2803 5.28033C13.5732 4.98744 13.5732 4.51256 13.2803 4.21967L11.2803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 12.5C13.6642 12.5 14 12.8358 14 13.25V16H12.5V13.25C12.5 12.8358 12.8358 12.5 13.25 12.5Z"
          fill={fill}
        />
        <path
          d="M5 16V14.25C5 13.8358 4.66421 13.5 4.25 13.5C3.83579 13.5 3.5 13.8358 3.5 14.25V16H5Z"
          fill={fill}
        />
        <path
          d="M8 16V13.25C8 12.8358 7.66421 12.5 7.25 12.5C6.83579 12.5 6.5 12.8358 6.5 13.25V16H8Z"
          fill={fill}
        />
        <path
          d="M11 16V14.25C11 13.8358 10.6642 13.5 10.25 13.5C9.83579 13.5 9.5 13.8358 9.5 14.25V16H11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WidthMax;
