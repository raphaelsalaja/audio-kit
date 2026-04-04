import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave2({
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
          d="M14.25 11.75V14.25C14.25 15.355 13.355 16.25 12.25 16.25H5.75C4.645 16.25 3.75 15.355 3.75 14.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.25V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9.25H5.51C5.95 9.25 6.338 8.963 6.466 8.542L7.465 5.272C7.514 5.111 7.741 5.109 7.793 5.269L10.207 12.729C10.259 12.889 10.486 12.887 10.535 12.726L11.534 9.456C11.662 9.035 12.051 8.748 12.49 8.748H16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MobileWave2;
