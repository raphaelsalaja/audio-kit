import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GapY({
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
          d="M4.75 13C4.05921 13 3.5 13.5592 3.5 14.25V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V14.25C2 12.7308 3.23079 11.5 4.75 11.5H13.25C14.7692 11.5 16 12.7308 16 14.25V15.25C16 15.6642 15.6642 16 15.25 16C14.8358 16 14.5 15.6642 14.5 15.25V14.25C14.5 13.5592 13.9408 13 13.25 13H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V3.75C3.5 4.44079 4.05921 5 4.75 5H13.25C13.9408 5 14.5 4.44079 14.5 3.75V2.75C14.5 2.33579 14.8358 2 15.25 2C15.6642 2 16 2.33579 16 2.75V3.75C16 5.26921 14.7692 6.5 13.25 6.5H4.75C3.23079 6.5 2 5.26921 2 3.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H11.25C11.6642 8.25 12 8.58579 12 9C12 9.41421 11.6642 9.75 11.25 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GapY;
