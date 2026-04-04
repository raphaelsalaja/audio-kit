import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flask({
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
          d="M10.75 1C11.1642 1 11.5 1.33579 11.5 1.75V6.81869L15.045 13.7221C15.8148 15.2196 14.7268 17 13.044 17H4.95601C3.27319 17 2.18524 15.2196 2.95498 13.7221L6.50001 6.81869V1.75C6.50001 1.33579 6.8358 1 7.25001 1H10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.6472 11L15.045 13.7221C15.8148 15.2196 14.7268 17 13.044 17H4.95601C3.27319 17 2.18524 15.2196 2.95498 13.7221L4.35284 11H13.6472Z"
          fill={fill}
        />
        <path
          d="M5 1.75C5 1.33579 5.33579 1 5.75 1H12.25C12.6642 1 13 1.33579 13 1.75C13 2.16421 12.6642 2.5 12.25 2.5H5.75C5.33579 2.5 5 2.16421 5 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flask;
