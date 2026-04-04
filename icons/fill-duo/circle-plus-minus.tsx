import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePlusMinus({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 4.75C9.75 4.33579 9.41421 4 9 4C8.58579 4 8.25 4.33579 8.25 4.75V6.5H6.5C6.08579 6.5 5.75 6.83579 5.75 7.25C5.75 7.66421 6.08579 8 6.5 8H8.25V9.75C8.25 10.1642 8.58579 10.5 9 10.5C9.41421 10.5 9.75 10.1642 9.75 9.75V8H11.5C11.9142 8 12.25 7.66421 12.25 7.25C12.25 6.83579 11.9142 6.5 11.5 6.5H9.75V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 12.25C5.75 11.8358 6.08579 11.5 6.5 11.5H11.5C11.9142 11.5 12.25 11.8358 12.25 12.25C12.25 12.6642 11.9142 13 11.5 13H6.5C6.08579 13 5.75 12.6642 5.75 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CirclePlusMinus;
