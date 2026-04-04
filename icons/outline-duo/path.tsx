import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Path({
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
          d="M14.25 10.75H12.25C11.6977 10.75 11.25 11.1977 11.25 11.75V13.75C11.25 14.3023 11.6977 14.75 12.25 14.75H14.25C14.8023 14.75 15.25 14.3023 15.25 13.75V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 10.75H12.25C11.6977 10.75 11.25 11.1977 11.25 11.75V13.75C11.25 14.3023 11.6977 14.75 12.25 14.75H14.25C14.8023 14.75 15.25 14.3023 15.25 13.75V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 3.25H12.875C14.187 3.25 15.25 4.313 15.25 5.625C15.25 6.937 14.187 8 12.875 8H5.125C3.813 8 2.75 9.063 2.75 10.375C2.75 11.687 3.813 12.75 5.125 12.75H8.75"
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

export default Path;
