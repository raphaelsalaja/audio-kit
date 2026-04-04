import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Texture({
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
          d="M10.7803 2.21967C11.0732 2.51256 11.0732 2.98744 10.7803 3.28033L3.28033 10.7803C2.98744 11.0732 2.51256 11.0732 2.21967 10.7803C1.92678 10.4874 1.92678 10.0126 2.21967 9.71967L9.71967 2.21967C10.0126 1.92678 10.4874 1.92678 10.7803 2.21967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.7803 7.21967C16.0732 7.51256 16.0732 7.98744 15.7803 8.28033L8.28033 15.7803C7.98744 16.0732 7.51256 16.0732 7.21967 15.7803C6.92678 15.4874 6.92678 15.0126 7.21967 14.7197L14.7197 7.21967C15.0126 6.92678 15.4874 6.92678 15.7803 7.21967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.7803 2.21967C16.0732 2.51256 16.0732 2.98744 15.7803 3.28033L3.28033 15.7803C2.98744 16.0732 2.51256 16.0732 2.21967 15.7803C1.92678 15.4874 1.92678 15.0126 2.21967 14.7197L14.7197 2.21967C15.0126 1.92678 15.4874 1.92678 15.7803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.78033 2.21967C6.07322 2.51256 6.07322 2.98744 5.78033 3.28033L3.28033 5.78033C2.98744 6.07322 2.51256 6.07322 2.21967 5.78033C1.92678 5.48744 1.92678 5.01256 2.21967 4.71967L4.71967 2.21967C5.01256 1.92678 5.48744 1.92678 5.78033 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.7803 12.2197C16.0732 12.5126 16.0732 12.9874 15.7803 13.2803L13.2803 15.7803C12.9874 16.0732 12.5126 16.0732 12.2197 15.7803C11.9268 15.4874 11.9268 15.0126 12.2197 14.7197L14.7197 12.2197C15.0126 11.9268 15.4874 11.9268 15.7803 12.2197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Texture;
