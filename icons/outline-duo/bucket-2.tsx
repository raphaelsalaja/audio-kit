import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bucket2({
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
          d="M15.2213 4.7171C14.9179 5.85789 12.2484 6.75002 9 6.75002C5.75164 6.75002 3.08207 5.85789 2.77872 4.7171L4 13.95C4 14.944 6.239 15.75 9 15.75C11.761 15.75 14 14.944 14 13.95L15.2213 4.7171Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 4.5L4 13.95C4 14.944 6.239 15.75 9 15.75C11.761 15.75 14 14.944 14 13.95L15.25 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.00001C10.188 10.344 14.972 13.136 16.771 11.083C18.135 9.52601 15.52 7.38401 15 6.98401"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75C12.4518 6.75 15.25 5.74264 15.25 4.5C15.25 3.25736 12.4518 2.25 9 2.25C5.54822 2.25 2.75 3.25736 2.75 4.5C2.75 5.74264 5.54822 6.75 9 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Bucket2;
