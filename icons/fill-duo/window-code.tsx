import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowCode({
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
          d="M3.75 2C2.22957 2 1 3.23701 1 4.75V13.25C1 14.763 2.22957 16 3.75 16H14.25C15.7704 16 17 14.763 17 13.25V4.75C17 3.23701 15.7704 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.2197 7.21967C10.5126 6.92678 10.9874 6.92678 11.2803 7.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L11.2803 12.7803C10.9874 13.0732 10.5126 13.0732 10.2197 12.7803C9.92678 12.4874 9.92678 12.0126 10.2197 11.7197L11.9393 10L10.2197 8.28033C9.92678 7.98744 9.92678 7.51256 10.2197 7.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.78033 7.21967C8.07322 7.51256 8.07322 7.98744 7.78033 8.28033L6.06066 10L7.78033 11.7197C8.07322 12.0126 8.07322 12.4874 7.78033 12.7803C7.48744 13.0732 7.01256 13.0732 6.71967 12.7803L4.46967 10.5303C4.17678 10.2374 4.17678 9.76256 4.46967 9.46967L6.71967 7.21967C7.01256 6.92678 7.48744 6.92678 7.78033 7.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 5.5C4.1642 5.5 4.5 5.16 4.5 4.75C4.5 4.34 4.1642 4 3.75 4C3.3358 4 3 4.34 3 4.75C3 5.16 3.3358 5.5 3.75 5.5Z"
          fill={fill}
        />
        <path
          d="M6.25 5.5C6.6642 5.5 7 5.16 7 4.75C7 4.34 6.6642 4 6.25 4C5.8358 4 5.5 4.34 5.5 4.75C5.5 5.16 5.8358 5.5 6.25 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowCode;
