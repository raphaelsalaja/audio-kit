import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinTack2({
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
          d="M10.371 15.553C10.803 14.996 11.391 14.083 11.719 12.835C11.888 12.193 11.949 11.611 11.962 11.134L14.967 8.129C15.748 7.348 15.748 6.082 14.967 5.301L12.699 3.033C11.918 2.252 10.652 2.252 9.87101 3.033L6.86601 6.038C6.38801 6.051 5.80701 6.112 5.16501 6.281C3.91701 6.609 3.00401 7.197 2.44701 7.629L10.372 15.554L10.371 15.553Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.08099 14.919L6.40899 11.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.371 15.553C10.803 14.996 11.391 14.083 11.719 12.835C11.888 12.193 11.949 11.611 11.962 11.134L14.967 8.129C15.748 7.348 15.748 6.082 14.967 5.301L12.699 3.033C11.918 2.252 10.652 2.252 9.87101 3.033L6.86601 6.038C6.38801 6.051 5.80701 6.112 5.16501 6.281C3.91701 6.609 3.00401 7.197 2.44701 7.629L10.372 15.554L10.371 15.553Z"
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

export default PinTack2;
