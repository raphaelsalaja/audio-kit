import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartColumnTrendUp({
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
          d="M3.75 10.5C4.16421 10.5 4.5 10.8358 4.5 11.25V14.75C4.5 15.1642 4.16421 15.5 3.75 15.5C3.33579 15.5 3 15.1642 3 14.75V11.25C3 10.8358 3.33579 10.5 3.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.25 7.5C14.6642 7.5 15 7.83579 15 8.25V14.75C15 15.1642 14.6642 15.5 14.25 15.5C13.8358 15.5 13.5 15.1642 13.5 14.75V8.25C13.5 7.83579 13.8358 7.5 14.25 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.25 7.5C7.66421 7.5 8 7.83579 8 8.25V14.75C8 15.1642 7.66421 15.5 7.25 15.5C6.83579 15.5 6.5 15.1642 6.5 14.75V8.25C6.5 7.83579 6.83579 7.5 7.25 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.75 10.5C11.1642 10.5 11.5 10.8358 11.5 11.25V14.75C11.5 15.1642 11.1642 15.5 10.75 15.5C10.3358 15.5 10 15.1642 10 14.75V11.25C10 10.8358 10.3358 10.5 10.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.7803 2.71967C16.0732 3.01256 16.0732 3.48744 15.7803 3.78033L11.6333 7.92733C11.1454 8.41522 10.3536 8.41522 9.86567 7.92733L6.7495 4.81116L3.28033 8.28033C2.98744 8.57322 2.51256 8.57322 2.21967 8.28033C1.92678 7.98744 1.92678 7.51256 2.21967 7.21967L5.86567 3.57367C6.35356 3.08578 7.14544 3.08578 7.63333 3.57367L10.7495 6.68984L14.7197 2.71967C15.0126 2.42678 15.4874 2.42678 15.7803 2.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartColumnTrendUp;
