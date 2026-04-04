import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave2({
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
          d="M10.371 13.599C9.97 13.599 9.617 13.343 9.493 12.96L7.645 7.25L7.183 8.761C6.957 9.502 6.284 10 5.509 10H1.75C1.336 10 1 9.664 1 9.25C1 8.836 1.336 8.5 1.75 8.5H5.51C5.621 8.5 5.717 8.429 5.749 8.323L6.748 5.053C6.867 4.665 7.225 4.404 7.63 4.401C8.031 4.401 8.383 4.657 8.507 5.04L10.355 10.75L10.817 9.239C11.043 8.498 11.716 8 12.491 8H16.251C16.665 8 17.001 8.336 17.001 8.75C17.001 9.164 16.665 9.5 16.251 9.5H12.491C12.38 9.5 12.284 9.571 12.252 9.677L11.253 12.947C11.134 13.335 10.776 13.596 10.371 13.599Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 11C14.6642 11 15 11.3358 15 11.75V14.25C15 15.7692 13.7692 17 12.25 17H5.75C4.23079 17 3 15.7692 3 14.25V12.25C3 11.8358 3.33579 11.5 3.75 11.5C4.16421 11.5 4.5 11.8358 4.5 12.25V14.25C4.5 14.9408 5.05921 15.5 5.75 15.5H12.25C12.9408 15.5 13.5 14.9408 13.5 14.25V11.75C13.5 11.3358 13.8358 11 14.25 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 2.5C5.05921 2.5 4.5 3.05921 4.5 3.75V6.25C4.5 6.66421 4.16421 7 3.75 7C3.33579 7 3 6.66421 3 6.25V3.75C3 2.23079 4.23079 1 5.75 1H12.25C13.7692 1 15 2.23079 15 3.75V5.75C15 6.16421 14.6642 6.5 14.25 6.5C13.8358 6.5 13.5 6.16421 13.5 5.75V3.75C13.5 3.05921 12.9408 2.5 12.25 2.5H5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MobileWave2;
