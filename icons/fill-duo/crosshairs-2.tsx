import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs2({
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
          d="M1 9C1 4.58169 4.58169 1 9 1C13.4183 1 17 4.58169 17 9C17 13.4183 13.4183 17 9 17C4.58169 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V4.25C9.75 4.66421 9.41421 5 9 5C8.58579 5 8.25 4.66421 8.25 4.25V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 9C13 8.58579 13.3358 8.25 13.75 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H13.75C13.3358 9.75 13 9.41421 13 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 13C9.41421 13 9.75 13.3358 9.75 13.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V13.75C8.25 13.3358 8.58579 13 9 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H4.25C4.66421 8.25 5 8.58579 5 9C5 9.41421 4.66421 9.75 4.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs2;
