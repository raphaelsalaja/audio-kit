import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchArea({
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
          d="M4.75 3.5C4.05921 3.5 3.5 4.05921 3.5 4.75V6.75C3.5 7.16421 3.16421 7.5 2.75 7.5C2.33579 7.5 2 7.16421 2 6.75V4.75C2 3.23079 3.23079 2 4.75 2H6.75C7.16421 2 7.5 2.33579 7.5 2.75C7.5 3.16421 7.16421 3.5 6.75 3.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5 2.75C10.5 2.33579 10.8358 2 11.25 2H13.25C14.7692 2 16 3.23079 16 4.75V6.75C16 7.16421 15.6642 7.5 15.25 7.5C14.8358 7.5 14.5 7.16421 14.5 6.75V4.75C14.5 4.05921 13.9408 3.5 13.25 3.5H11.25C10.8358 3.5 10.5 3.16421 10.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 10.5C3.16421 10.5 3.5 10.8358 3.5 11.25V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H6.75C7.16421 14.5 7.5 14.8358 7.5 15.25C7.5 15.6642 7.16421 16 6.75 16H4.75C3.23079 16 2 14.7692 2 13.25V11.25C2 10.8358 2.33579 10.5 2.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 5C6.79077 5 5 6.7909 5 9C5 11.2091 6.79077 13 9 13C9.83355 13 10.6075 12.745 11.2482 12.3089L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L12.3089 11.2482C12.7451 10.6075 13 9.83352 13 9C13 6.7909 11.2092 5 9 5ZM6.5 9C6.5 7.6193 7.61923 6.5 9 6.5C10.3808 6.5 11.5 7.6193 11.5 9C11.5 10.3807 10.3808 11.5 9 11.5C7.61923 11.5 6.5 10.3807 6.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SearchArea;
