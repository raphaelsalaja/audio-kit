import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Terminal({
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
          d="M2.21967 3.21967C2.51256 2.92678 2.98744 2.92678 3.28033 3.21967L8.53033 8.46967C8.82322 8.76256 8.82322 9.23744 8.53033 9.53033L3.28033 14.7803C2.98744 15.0732 2.51256 15.0732 2.21967 14.7803C1.92678 14.4874 1.92678 14.0126 2.21967 13.7197L6.93934 9L2.21967 4.28033C1.92678 3.98744 1.92678 3.51256 2.21967 3.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.75 14.25C8.75 13.8358 9.08579 13.5 9.5 13.5H15.25C15.6642 13.5 16 13.8358 16 14.25C16 14.6642 15.6642 15 15.25 15H9.5C9.08579 15 8.75 14.6642 8.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Terminal;
