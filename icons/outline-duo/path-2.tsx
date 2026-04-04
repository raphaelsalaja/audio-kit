import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Path2({
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
          d="M13.25 14.75C14.3546 14.75 15.25 13.8546 15.25 12.75C15.25 11.6454 14.3546 10.75 13.25 10.75C12.1454 10.75 11.25 11.6454 11.25 12.75C11.25 13.8546 12.1454 14.75 13.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 3.25H12.875C14.187 3.25 15.25 4.313 15.25 5.625C15.25 6.937 14.187 8 12.875 8H5.125C3.813 8 2.75 9.063 2.75 10.375C2.75 11.687 3.813 12.75 5.125 12.75H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.75C14.3546 14.75 15.25 13.8546 15.25 12.75C15.25 11.6454 14.3546 10.75 13.25 10.75C12.1454 10.75 11.25 11.6454 11.25 12.75C11.25 13.8546 12.1454 14.75 13.25 14.75Z"
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

export default Path2;
