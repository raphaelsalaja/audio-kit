import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserGallery({
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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 17C12.3284 17 13 16.3284 13 15.5C13 14.6716 12.3284 14 11.5 14C10.6716 14 10 14.6716 10 15.5C10 16.3284 10.6716 17 11.5 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.5 17C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14C14.6716 14 14 14.6716 14 15.5C14 16.3284 14.6716 17 15.5 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.15778 9.83499C5.97798 10.1304 4.15139 11.5284 3.29099 13.4715C2.92599 14.2965 3.37799 15.2457 4.23799 15.5167C5.19688 15.8182 6.42079 16.0763 7.81869 16.181"
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

export default UserGallery;
