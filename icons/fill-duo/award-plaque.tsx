import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AwardPlaque({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V7.81558C16.3303 7.45476 15.5641 7.25 14.75 7.25C12.1262 7.25 10 9.37684 10 12C10 13.138 10.4011 14.1828 11.0672 15H3.75C2.23079 15 1 13.7692 1 12.25V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 7.25C5 6.83579 5.33579 6.5 5.75 6.5H11C11.4142 6.5 11.75 6.83579 11.75 7.25C11.75 7.66421 11.4142 8 11 8H5.75C5.33579 8 5 7.66421 5 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 10.25C5 9.83579 5.33579 9.5 5.75 9.5H8.25C8.66421 9.5 9 9.83579 9 10.25C9 10.6642 8.66421 11 8.25 11H5.75C5.33579 11 5 10.6642 5 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.75 8.75C12.9547 8.75 11.5 10.2051 11.5 12C11.5 13.0407 11.9891 13.9672 12.75 14.562V17.5C12.75 17.702 12.872 17.885 13.059 17.962C13.246 18.041 13.46 17.997 13.604 17.854L14.75 16.708L15.896 17.854C15.992 17.95 16.12 18 16.25 18C16.314 18 16.38 17.988 16.441 17.962C16.628 17.885 16.75 17.702 16.75 17.5V14.562C17.5109 13.9672 18 13.0407 18 12C18 10.2051 16.5453 8.75 14.75 8.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AwardPlaque;
