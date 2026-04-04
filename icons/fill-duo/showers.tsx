import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Showers({
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
          d="M2.21967 2.21967C2.51256 1.92678 2.98744 1.92678 3.28033 2.21967L9.28033 8.21967C9.57322 8.51256 9.57322 8.98744 9.28033 9.28033C8.98744 9.57322 8.51256 9.57322 8.21967 9.28033L2.21967 3.28033C1.92678 2.98744 1.92678 2.51256 2.21967 2.21967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.71967 3.21967C9.01256 2.92678 9.48744 2.92678 9.78033 3.21967L15.7803 9.21967C16.0732 9.51256 16.0732 9.98744 15.7803 10.2803C15.4874 10.5732 15.0126 10.5732 14.7197 10.2803L8.71967 4.28033C8.42678 3.98744 8.42678 3.51256 8.71967 3.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.21967 8.71967C3.51256 8.42678 3.98744 8.42678 4.28033 8.71967L10.2803 14.7197C10.5732 15.0126 10.5732 15.4874 10.2803 15.7803C9.98744 16.0732 9.51256 16.0732 9.21967 15.7803L3.21967 9.78033C2.92678 9.48744 2.92678 9.01256 3.21967 8.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Showers;
