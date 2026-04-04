import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartColumnTrendDown({
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
          d="M14.25 10.5C14.6642 10.5 15 10.8358 15 11.25V14.75C15 15.1642 14.6642 15.5 14.25 15.5C13.8358 15.5 13.5 15.1642 13.5 14.75V11.25C13.5 10.8358 13.8358 10.5 14.25 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 7.5C4.16421 7.5 4.5 7.83579 4.5 8.25V14.75C4.5 15.1642 4.16421 15.5 3.75 15.5C3.33579 15.5 3 15.1642 3 14.75V8.25C3 7.83579 3.33579 7.5 3.75 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.75 7.5C11.1642 7.5 11.5 7.83579 11.5 8.25V14.75C11.5 15.1642 11.1642 15.5 10.75 15.5C10.3358 15.5 10 15.1642 10 14.75V8.25C10 7.83579 10.3358 7.5 10.75 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.25 10.5C7.66421 10.5 8 10.8358 8 11.25V14.75C8 15.1642 7.66421 15.5 7.25 15.5C6.83579 15.5 6.5 15.1642 6.5 14.75V11.25C6.5 10.8358 6.83579 10.5 7.25 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.21967 2.71967C2.51256 2.42678 2.98744 2.42678 3.28033 2.71967L7.2505 6.68984L10.3667 3.57367C10.8546 3.08578 11.6464 3.08578 12.1343 3.57367L15.7803 7.21967C16.0732 7.51256 16.0732 7.98744 15.7803 8.28033C15.4874 8.57322 15.0126 8.57322 14.7197 8.28033L11.2505 4.81116L8.13433 7.92733C7.64644 8.41522 6.85456 8.41522 6.36667 7.92733L2.21967 3.78033C1.92678 3.48744 1.92678 3.01256 2.21967 2.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartColumnTrendDown;
