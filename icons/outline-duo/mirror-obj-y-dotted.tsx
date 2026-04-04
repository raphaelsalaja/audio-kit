import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjYDotted({
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
          d="M2.75 6.5V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.5"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.5L15.25 13.25C15.25 14.355 14.355 15.25 13.25 15.25L4.75 15.25C3.645 15.25 2.75 14.355 2.75 13.25L2.75 11.5"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 6.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 11.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 9.75C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25C14.8358 8.25 14.5 8.58579 14.5 9C14.5 9.41421 14.8358 9.75 15.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 9.75C12.5392 9.75 12.875 9.41421 12.875 9C12.875 8.58579 12.5392 8.25 12.125 8.25C11.7108 8.25 11.375 8.58579 11.375 9C11.375 9.41421 11.7108 9.75 12.125 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 9.75C6.28921 9.75 6.625 9.41421 6.625 9C6.625 8.58579 6.28921 8.25 5.875 8.25C5.46079 8.25 5.125 8.58579 5.125 9C5.125 9.41421 5.46079 9.75 5.875 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 9.75C3.16421 9.75 3.5 9.41421 3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25C2.33579 8.25 2 8.58579 2 9C2 9.41421 2.33579 9.75 2.75 9.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MirrorObjYDotted;
