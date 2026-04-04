import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IndentDecrease2({
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
          d="M15.7803 6.21967C16.0732 6.51256 16.0732 6.98744 15.7803 7.28033L14.0607 9L15.7803 10.7197C16.0732 11.0126 16.0732 11.4874 15.7803 11.7803C15.4874 12.0732 15.0126 12.0732 14.7197 11.7803L12.4697 9.53033C12.1768 9.23744 12.1768 8.76256 12.4697 8.46967L14.7197 6.21967C15.0126 5.92678 15.4874 5.92678 15.7803 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 14.25C2 13.8358 2.33579 13.5 2.75 13.5H10.25C10.6642 13.5 11 13.8358 11 14.25C11 14.6642 10.6642 15 10.25 15H2.75C2.33579 15 2 14.6642 2 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 10.75C2 10.3358 2.33579 10 2.75 10H10.25C10.6642 10 11 10.3358 11 10.75C11 11.1642 10.6642 11.5 10.25 11.5H2.75C2.33579 11.5 2 11.1642 2 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H10.25C10.6642 6.5 11 6.83579 11 7.25C11 7.66421 10.6642 8 10.25 8H2.75C2.33579 8 2 7.66421 2 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 3.75C2 3.33579 2.33579 3 2.75 3H10.25C10.6642 3 11 3.33579 11 3.75C11 4.16421 10.6642 4.5 10.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default IndentDecrease2;
