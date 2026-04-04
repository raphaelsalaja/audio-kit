import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GapX({
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
          d="M14.25 3.5C13.5592 3.5 13 4.05921 13 4.75V13.25C13 13.9408 13.5592 14.5 14.25 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H14.25C12.7308 16 11.5 14.7692 11.5 13.25V4.75C11.5 3.23079 12.7308 2 14.25 2H15.25C15.6642 2 16 2.33579 16 2.75C16 3.16421 15.6642 3.5 15.25 3.5H14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 2.75C2 2.33579 2.33579 2 2.75 2H3.75C5.26921 2 6.5 3.23079 6.5 4.75V13.25C6.5 14.7692 5.26921 16 3.75 16H2.75C2.33579 16 2 15.6642 2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H3.75C4.44079 14.5 5 13.9408 5 13.25V4.75C5 4.05921 4.44079 3.5 3.75 3.5H2.75C2.33579 3.5 2 3.16421 2 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6C9.41421 6 9.75 6.33579 9.75 6.75V11.25C9.75 11.6642 9.41421 12 9 12C8.58579 12 8.25 11.6642 8.25 11.25V6.75C8.25 6.33579 8.58579 6 9 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GapX;
