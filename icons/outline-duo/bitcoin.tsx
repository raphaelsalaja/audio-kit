import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bitcoin({
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
          d="M11.5774 9.44356C10.2217 9.07673 8.20818 8.57301 7.37087 8.367L6.13483 13.3511C7.05189 13.577 9.16115 14.1047 10.2616 14.4077C11.6372 14.7865 13.3318 14.1685 13.6309 12.6334C13.9299 11.0983 13.272 9.9021 11.5774 9.44356Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.809 2.44501L11.253 4.65401"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.88999 14.041L8.33398 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.28302 3.403L12.357 4.932C13.577 5.239 14.317 6.477 14.01 7.697C13.703 8.917 12.465 9.657 11.245 9.35L7.38002 8.377"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.38002 8.37601L11.798 9.48801C13.17 9.83301 14.003 11.226 13.657 12.598C13.312 13.97 11.919 14.803 10.547 14.458L3.92102 12.79"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.048 1.75L5.573 15.555"
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

export default Bitcoin;
