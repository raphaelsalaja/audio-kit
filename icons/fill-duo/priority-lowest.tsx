import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PriorityLowest({
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
          d="M2.21967 8.21967C2.51256 7.92678 2.98744 7.92678 3.28033 8.21967L9 13.9393L14.7197 8.21967C15.0126 7.92678 15.4874 7.92678 15.7803 8.21967C16.0732 8.51256 16.0732 8.98744 15.7803 9.28033L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L2.21967 9.28033C1.92678 8.98744 1.92678 8.51256 2.21967 8.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.21967 3.21967C2.51256 2.92678 2.98744 2.92678 3.28033 3.21967L9 8.93934L14.7197 3.21967C15.0126 2.92678 15.4874 2.92678 15.7803 3.21967C16.0732 3.51256 16.0732 3.98744 15.7803 4.28033L9.53033 10.5303C9.23744 10.8232 8.76256 10.8232 8.46967 10.5303L2.21967 4.28033C1.92678 3.98744 1.92678 3.51256 2.21967 3.21967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PriorityLowest;
