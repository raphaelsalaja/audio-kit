import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LineSpacing({
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
          d="M3.21967 1.21967C3.51256 0.926777 3.98744 0.926777 4.28033 1.21967L6.28033 3.21967C6.57322 3.51256 6.57322 3.98744 6.28033 4.28033C5.98744 4.57322 5.51256 4.57322 5.21967 4.28033L4.49997 3.56064L4.5 14.4393L5.21967 13.7197C5.51256 13.4268 5.98744 13.4268 6.28033 13.7197C6.57322 14.0126 6.57322 14.4874 6.28033 14.7803L4.28033 16.7803C3.98744 17.0732 3.51256 17.0732 3.21967 16.7803L1.21967 14.7803C0.926777 14.4874 0.926777 14.0126 1.21967 13.7197C1.51256 13.4268 1.98744 13.4268 2.28033 13.7197L3 14.4393L2.99997 3.56069L2.28033 4.28033C1.98744 4.57322 1.51256 4.57322 1.21967 4.28033C0.926777 3.98744 0.926777 3.51256 1.21967 3.21967L3.21967 1.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 14.25C8 13.8358 8.33579 13.5 8.75 13.5H13.25C13.6642 13.5 14 13.8358 14 14.25C14 14.6642 13.6642 15 13.25 15H8.75C8.33579 15 8 14.6642 8 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 10.75C8 10.3358 8.33579 10 8.75 10H16.25C16.6642 10 17 10.3358 17 10.75C17 11.1642 16.6642 11.5 16.25 11.5H8.75C8.33579 11.5 8 11.1642 8 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 7.25C8 6.83579 8.33579 6.5 8.75 6.5H16.25C16.6642 6.5 17 6.83579 17 7.25C17 7.66421 16.6642 8 16.25 8H8.75C8.33579 8 8 7.66421 8 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 3.75C8 3.33579 8.33579 3 8.75 3H16.25C16.6642 3 17 3.33579 17 3.75C17 4.16421 16.6642 4.5 16.25 4.5H8.75C8.33579 4.5 8 4.16421 8 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LineSpacing;
