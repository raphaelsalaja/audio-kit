import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderContent2({
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
          d="M9.124 5.75H13.75C14.855 5.75 15.75 6.645 15.75 7.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75H4.25C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H5.966C6.615 2.75 7.224 3.065 7.598 3.595L9.124 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.966 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.124 5.75H13.75C14.855 5.75 15.75 6.645 15.75 7.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75H4.25C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H5.966C6.615 2.75 7.224 3.065 7.598 3.595L9.124 5.75Z"
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

export default FolderContent2;
