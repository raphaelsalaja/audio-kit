import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bathrobe({
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
          d="M5.9843 1.75673C6.25953 2.97918 7.17284 5.40688 8.98288 6.70596C10.7647 5.38101 11.7356 2.85673 11.9983 1.76021L11.68 1.75H12L14.429 2.791C15.091 3.074 15.549 3.692 15.629 4.408L16.25 10L14.9841 10.3583V9.24861C14.9841 8.97247 14.7602 8.74861 14.4841 8.74861C14.208 8.74861 13.9841 8.97247 13.9841 9.24861V10.6413L13.255 10.8476L13.25 10.8477V16.25H4.75V10.8892L4.00943 10.6697V9.24861C4.00943 8.97247 3.78557 8.74861 3.50943 8.74861C3.23329 8.74861 3.00943 8.97247 3.00943 9.24861V10.3733L1.75 10L2.371 4.408C2.451 3.693 2.909 3.075 3.571 2.791L5.9843 1.75673Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12 1.75C11.847 2.511 11.474 3.844 10.469 5.188C9.698 6.219 8.843 6.87 8.25 7.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 1.75C6.153 2.511 6.526 3.844 7.531 5.187C8.016 5.835 8.534 6.334 9 6.709"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10.25H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.75V16.25H4.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.375 10.25L16.25 10L15.629 4.408C15.549 3.692 15.091 3.074 14.429 2.791L12 1.75H9H6L3.571 2.791C2.909 3.075 2.451 3.693 2.371 4.408L1.75 10L2.625 10.25"
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

export default Bathrobe;
