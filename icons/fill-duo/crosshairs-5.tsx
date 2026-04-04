import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs5({
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
          d="M6 9C6 7.34327 7.3427 6 9 6C10.6573 6 12 7.34327 12 9C12 10.6567 10.6573 12 9 12C7.3427 12 6 10.6567 6 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V3.25C9.75 3.66421 9.41421 4 9 4C8.58579 4 8.25 3.66421 8.25 3.25V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 9C14 8.58579 14.3358 8.25 14.75 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H14.75C14.3358 9.75 14 9.41421 14 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14C9.41421 14 9.75 14.3358 9.75 14.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V14.75C8.25 14.3358 8.58579 14 9 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs5;
