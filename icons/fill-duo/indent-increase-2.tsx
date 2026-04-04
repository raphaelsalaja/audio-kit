import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IndentIncrease2({
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
          d="M2.21967 6.21967C2.51256 5.92678 2.98744 5.92678 3.28033 6.21967L5.53033 8.46967C5.82322 8.76256 5.82322 9.23744 5.53033 9.53033L3.28033 11.7803C2.98744 12.0732 2.51256 12.0732 2.21967 11.7803C1.92678 11.4874 1.92678 11.0126 2.21967 10.7197L3.93934 9L2.21967 7.28033C1.92678 6.98744 1.92678 6.51256 2.21967 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 3.75C7 3.33579 7.33579 3 7.75 3H15.25C15.6642 3 16 3.33579 16 3.75C16 4.16421 15.6642 4.5 15.25 4.5H7.75C7.33579 4.5 7 4.16421 7 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 7.25C7 6.83579 7.33579 6.5 7.75 6.5H15.25C15.6642 6.5 16 6.83579 16 7.25C16 7.66421 15.6642 8 15.25 8H7.75C7.33579 8 7 7.66421 7 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 10.75C7 10.3358 7.33579 10 7.75 10H15.25C15.6642 10 16 10.3358 16 10.75C16 11.1642 15.6642 11.5 15.25 11.5H7.75C7.33579 11.5 7 11.1642 7 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H15.25C15.6642 13.5 16 13.8358 16 14.25C16 14.6642 15.6642 15 15.25 15H7.75C7.33579 15 7 14.6642 7 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IndentIncrease2;
