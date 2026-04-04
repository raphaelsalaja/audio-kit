import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipVertical2({
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
          d="M3 2.543C3 1.85279 3.55979 1.293 4.25 1.293C4.43793 1.293 4.62227 1.3355 4.78923 1.41524L14.5796 6.09738C15.5386 6.55693 15.2132 8 14.148 8H3.75C3.33579 8 3 7.66421 3 7.25V2.543Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 10.75C3 10.3358 3.33579 10 3.75 10H14.148C15.2132 10 15.5392 11.4428 14.5801 11.9024L4.78958 16.5846C4.62256 16.6644 4.43786 16.707 4.25 16.707C3.55979 16.707 3 16.1472 3 15.457V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FlipVertical2;
