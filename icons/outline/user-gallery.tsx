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
          d="M9 7.25049C10.519 7.25049 11.75 6.01929 11.75 4.50049C11.75 2.98169 10.519 1.75049 9 1.75049C7.481 1.75049 6.25 2.98169 6.25 4.50049C6.25 6.01929 7.481 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 13.0005C12.328 13.0005 13 12.3289 13 11.5005C13 10.6721 12.328 10.0005 11.5 10.0005C10.672 10.0005 10 10.6721 10 11.5005C10 12.3289 10.672 13.0005 11.5 13.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.5 13.0005C16.328 13.0005 17 12.3289 17 11.5005C17 10.6721 16.328 10.0005 15.5 10.0005C14.672 10.0005 14 10.6721 14 11.5005C14 12.3289 14.672 13.0005 15.5 13.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.5 17.0005C12.328 17.0005 13 16.3289 13 15.5005C13 14.6721 12.328 14.0005 11.5 14.0005C10.672 14.0005 10 14.6721 10 15.5005C10 16.3289 10.672 17.0005 11.5 17.0005Z"
          fill={secondaryfill}
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
        <path
          d="M15.5 17.0005C16.328 17.0005 17 16.3289 17 15.5005C17 14.6721 16.328 14.0005 15.5 14.0005C14.672 14.0005 14 14.6721 14 15.5005C14 16.3289 14.672 17.0005 15.5 17.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default UserGallery;
