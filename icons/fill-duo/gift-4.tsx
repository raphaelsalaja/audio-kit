import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gift4({
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
          d="M14.9807 7.08001L5.13065 16.93C5.3297 16.9758 5.53702 17 5.75001 17H7.93935L15 9.93934V7.25C15 7.19153 14.9933 7.13463 14.9807 7.08001Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15 12.0607L10.0607 17H12.25C13.7692 17 15 15.7692 15 14.25V12.0607Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 6.5C3.33579 6.5 3 6.83579 3 7.25V11.9393L8.43934 6.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.5607 6.5L3 14.0607V14.25C3 14.9942 3.29532 15.6691 3.7752 16.1641L13.4393 6.5H10.5607Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.25 4.5H14.788C14.923 4.193 15 3.856 15 3.5C15 2.122 13.879 1 12.5 1C10.739 1 9.636 2.231 9 3.339C8.364 2.232 7.261 1 5.5 1C4.121 1 3 2.122 3 3.5C3 3.856 3.077 4.193 3.212 4.5H2.75C1.785 4.5 1 5.276 1 6.25C1 7.224 1.785 8 2.75 8H15.25C16.215 8 17 7.218 17 6.25C17 5.282 16.215 4.5 15.25 4.5ZM12.5 2.5C13.052 2.5 13.5 2.949 13.5 3.5C13.5 4.051 13.052 4.5 12.5 4.5H10.081C10.486 3.64 11.257 2.5 12.5 2.5ZM4.5 3.5C4.5 2.949 4.948 2.5 5.5 2.5C6.734 2.5 7.507 3.64 7.915 4.5H5.5C4.948 4.5 4.5 4.051 4.5 3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gift4;
