import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewRight2({
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
          d="M3.75 3.25L3.75 14.75C3.75 15.5784 4.42157 16.25 5.25 16.25H6.75C7.57843 16.25 8.25 15.5784 8.25 14.75V3.25C8.25 2.42157 7.57843 1.75 6.75 1.75H5.25C4.42157 1.75 3.75 2.42157 3.75 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 9H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 6.5V11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 3.25L3.75 14.75C3.75 15.5784 4.42157 16.25 5.25 16.25H6.75C7.57843 16.25 8.25 15.5784 8.25 14.75V3.25C8.25 2.42157 7.57843 1.75 6.75 1.75H5.25C4.42157 1.75 3.75 2.42157 3.75 3.25Z"
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

export default TableColNewRight2;
