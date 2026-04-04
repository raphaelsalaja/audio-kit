import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RouteClosed({
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
          d="M2.5 9C2.5 5.40975 5.41022 2.5 9 2.5C12.5898 2.5 15.5 5.40975 15.5 9C15.5 12.5902 12.5898 15.5 9 15.5C5.41022 15.5 2.5 12.5902 2.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.4572 9.75H17C17.4142 9.75 17.75 9.41421 17.75 9C17.75 8.58579 17.4142 8.25 17 8.25H15.4572C15.4855 8.49608 15.5 8.74634 15.5 9C15.5 9.25366 15.4855 9.50392 15.4572 9.75Z"
          fill={fill}
        />
        <path
          d="M2.54279 8.25C2.51453 8.49608 2.5 8.74634 2.5 9C2.5 9.25366 2.51453 9.50392 2.54279 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.54279Z"
          fill={fill}
        />
        <path
          d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L7.93934 9L6.21967 10.7197C5.92678 11.0126 5.92678 11.4874 6.21967 11.7803C6.51256 12.0732 6.98744 12.0732 7.28033 11.7803L9 10.0607L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L10.0607 9L11.7803 7.28033C12.0732 6.98744 12.0732 6.51256 11.7803 6.21967C11.4874 5.92678 11.0126 5.92678 10.7197 6.21967L9 7.93934L7.28033 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RouteClosed;
