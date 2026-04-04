import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connection({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V13.7935C9.50576 13.8327 9.25525 13.853 9 13.853C8.74475 13.853 8.49424 13.8327 8.25 13.7935V15.4572C5.01347 15.0853 2.5 12.3361 2.5 9C2.5 5.41021 5.41021 2.5 9 2.5C12.5898 2.5 15.5 5.41021 15.5 9C15.5 11.2629 14.3431 13.2568 12.5856 14.4219C12.2404 14.6508 12.146 15.1162 12.3749 15.4614C12.6038 15.8066 13.0692 15.901 13.4144 15.6721C15.5729 14.2412 17 11.7871 17 9C17 4.58179 13.4182 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.98199 5.55C7.98199 5.13579 7.64621 4.8 7.23199 4.8C6.81778 4.8 6.48199 5.13579 6.48199 5.55V7H6.043C5.07679 7 4.293 7.78379 4.293 8.75V9.146C4.293 11.7452 6.40079 13.853 9 13.853C11.5992 13.853 13.707 11.7452 13.707 9.146V8.75C13.707 7.78379 12.9232 7 11.957 7H11.518V5.55C11.518 5.13579 11.1822 4.8 10.768 4.8C10.3538 4.8 10.018 5.13579 10.018 5.55V7H7.98199V5.55Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Connection;
