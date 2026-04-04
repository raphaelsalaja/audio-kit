import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles4({
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
          d="M1.75 8.25C2.16421 8.25 2.5 8.58579 2.5 9C2.5 12.5898 5.41021 15.5 9 15.5C9.41421 15.5 9.75 15.8358 9.75 16.25C9.75 16.6642 9.41421 17 9 17C4.58179 17 1 13.4182 1 9C1 8.58579 1.33579 8.25 1.75 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 1.75C8.25 1.33579 8.58579 1 9 1C13.4182 1 17 4.58179 17 9C17 9.41421 16.6642 9.75 16.25 9.75C15.8358 9.75 15.5 9.41421 15.5 9C15.5 5.41021 12.5898 2.5 9 2.5C8.58579 2.5 8.25 2.16421 8.25 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 9C4 6.23879 6.23879 4 9 4C11.7612 4 14 6.23879 14 9C14 11.7612 11.7612 14 9 14C6.23879 14 4 11.7612 4 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Circles4;
