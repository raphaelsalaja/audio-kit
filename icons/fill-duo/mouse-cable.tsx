import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MouseCable({
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
          d="M8.25 4.5C5.90279 4.5 4 6.40279 4 8.75V13.75C4 16.0972 5.90279 18 8.25 18H9.75C12.0972 18 14 16.0972 14 13.75V8.75C14 6.40279 12.0972 4.5 9.75 4.5H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 8C9.41421 8 9.75 8.33579 9.75 8.75V11.25C9.75 11.6642 9.41421 12 9 12C8.58579 12 8.25 11.6642 8.25 11.25V8.75C8.25 8.33579 8.58579 8 9 8Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15 1C15 0.585786 14.6642 0.25 14.25 0.25C13.8358 0.25 13.5 0.585786 13.5 1C13.5 1.55179 13.0518 2 12.5 2H10.75C9.36979 2 8.25 3.11979 8.25 4.5H9.75C9.75 3.94821 10.1982 3.5 10.75 3.5H12.5C13.8802 3.5 15 2.38021 15 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MouseCable;
