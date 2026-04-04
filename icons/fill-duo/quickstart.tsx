import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Quickstart({
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
          d="M13.7197 2.21967C14.0126 1.92678 14.4874 1.92678 14.7803 2.21967L16.7803 4.21967C17.0732 4.51256 17.0732 4.98744 16.7803 5.28033C16.4874 5.57322 16.0126 5.57322 15.7197 5.28033L13.7197 3.28033C13.4268 2.98744 13.4268 2.51256 13.7197 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.75 0.5C6.33579 0.5 6 0.835786 6 1.25C6 1.66421 6.33579 2 6.75 2H8.25V3.0397C8.4964 3.01346 8.74663 3 9 3C9.25337 3 9.5036 3.01346 9.75 3.0397V2H11.25C11.6642 2 12 1.66421 12 1.25C12 0.835786 11.6642 0.5 11.25 0.5H6.75Z"
          fill={fill}
        />
        <path
          d="M2.07088 9C2.55608 5.6077 5.47331 3 9 3C12.8662 3 16 6.134 16 10C16 13.866 12.8662 17 9 17C6.40885 17 4.1467 15.5923 2.93642 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75C1.5 12.3358 1.83579 12 2.25 12H4.25C4.66421 12 5 11.6642 5 11.25C5 10.8358 4.66421 10.5 4.25 10.5H0.75C0.335786 10.5 0 10.1642 0 9.75C0 9.33579 0.335786 9 0.75 9H2.07088Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.7803 7.21967C12.0732 7.51256 12.0732 7.98744 11.7803 8.28033L9.53033 10.5303C9.23744 10.8232 8.76256 10.8232 8.46967 10.5303C8.17678 10.2374 8.17678 9.76256 8.46967 9.46967L10.7197 7.21967C11.0126 6.92678 11.4874 6.92678 11.7803 7.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Quickstart;
