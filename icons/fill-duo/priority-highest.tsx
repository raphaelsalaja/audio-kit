import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PriorityHighest({
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
          d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L15.7803 8.71967C16.0732 9.01256 16.0732 9.48744 15.7803 9.78033C15.4874 10.0732 15.0126 10.0732 14.7197 9.78033L9 4.06066L3.28033 9.78033C2.98744 10.0732 2.51256 10.0732 2.21967 9.78033C1.92678 9.48744 1.92678 9.01256 2.21967 8.71967L8.46967 2.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.46967 7.46967C8.76256 7.17678 9.23744 7.17678 9.53033 7.46967L15.7803 13.7197C16.0732 14.0126 16.0732 14.4874 15.7803 14.7803C15.4874 15.0732 15.0126 15.0732 14.7197 14.7803L9 9.06066L3.28033 14.7803C2.98744 15.0732 2.51256 15.0732 2.21967 14.7803C1.92678 14.4874 1.92678 14.0126 2.21967 13.7197L8.46967 7.46967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PriorityHighest;
