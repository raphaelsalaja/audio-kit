import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareTerminal({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 12.25C9 11.8358 9.33579 11.5 9.75 11.5H12.25C12.6642 11.5 13 11.8358 13 12.25C13 12.6642 12.6642 13 12.25 13H9.75C9.33579 13 9 12.6642 9 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.21967 6.71967C5.51256 6.42678 5.98744 6.42678 6.28033 6.71967L8.78033 9.21967C9.07322 9.51256 9.07322 9.98744 8.78033 10.2803L6.28033 12.7803C5.98744 13.0732 5.51256 13.0732 5.21967 12.7803C4.92678 12.4874 4.92678 12.0126 5.21967 11.7197L7.18934 9.75L5.21967 7.78033C4.92678 7.48744 4.92678 7.01256 5.21967 6.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareTerminal;
