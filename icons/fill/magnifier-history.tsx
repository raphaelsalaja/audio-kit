import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierHistory({
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
          d="M7.75 1.5C4.29829 1.5 1.5 4.29829 1.5 7.75C1.5 11.2017 4.29829 14 7.75 14C9.20532 14 10.5453 13.5019 11.6073 12.668L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.1689 11.1083C11.876 10.8154 11.4012 10.8154 11.1083 11.1083C11.101 11.1155 11.0939 11.1229 11.087 11.1304C10.2284 11.9781 9.0509 12.5 7.75 12.5C5.12671 12.5 3 10.3733 3 7.75C3 5.12671 5.12671 3 7.75 3C8.16421 3 8.5 2.66421 8.5 2.25C8.5 1.83579 8.16421 1.5 7.75 1.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 1C10.8358 1 10.5 1.33579 10.5 1.75C10.5 2.16421 10.8358 2.5 11.25 2.5H13.75C14.7168 2.5 15.5 3.28321 15.5 4.25C15.5 5.21679 14.7168 6 13.75 6H9.56066L10.7803 4.78033C11.0732 4.48744 11.0732 4.01256 10.7803 3.71967C10.4874 3.42678 10.0126 3.42678 9.71967 3.71967L7.21967 6.21967C6.92678 6.51256 6.92678 6.98744 7.21967 7.28033L9.71967 9.78033C10.0126 10.0732 10.4874 10.0732 10.7803 9.78033C11.0732 9.48744 11.0732 9.01256 10.7803 8.71967L9.56066 7.5H13.75C15.5452 7.5 17 6.04521 17 4.25C17 2.45479 15.5452 1 13.75 1H11.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierHistory;
