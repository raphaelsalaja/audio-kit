import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeLine({
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
          d="M15.7803 2.21967C16.0732 2.51256 16.0732 2.98744 15.7803 3.28033L3.28033 15.7803C2.98744 16.0732 2.51256 16.0732 2.21967 15.7803C1.92678 15.4874 1.92678 15.0126 2.21967 14.7197L14.7197 2.21967C15.0126 1.92678 15.4874 1.92678 15.7803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ShapeLine;
