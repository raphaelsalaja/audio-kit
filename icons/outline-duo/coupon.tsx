import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Coupon({
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
          d="M2.25 3.75C2.25 2.64543 3.14543 1.75 4.25 1.75H13.75C14.8546 1.75 15.75 2.64543 15.75 3.75V6.25C15.75 7.35457 14.8546 8.25 13.75 8.25H11.9888C11.9147 8.12568 11.8274 8.00674 11.7268 7.89509C11.3905 7.52174 10.9575 7.28721 10.5 7.19529V5.25C10.5 4.00736 9.49264 3 8.25 3C7.00736 3 6 4.00736 6 5.25V8.25H4.25C3.14543 8.25 2.25 7.35457 2.25 6.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10 17C10.9665 17 11.75 16.2165 11.75 15.25C11.75 14.2835 10.9665 13.5 10 13.5C9.0335 13.5 8.25 14.2835 8.25 15.25C8.25 16.2165 9.0335 17 10 17Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.747 8.25H4.25C3.145 8.25 2.25 7.355 2.25 6.25V3.75C2.25 2.645 3.145 1.75 4.25 1.75H13.75C14.855 1.75 15.75 2.645 15.75 3.75V6.25C15.75 7.355 14.855 8.25 13.75 8.25H12.083"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 15.25V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 14.25C4.9665 14.25 5.75 13.4665 5.75 12.5C5.75 11.5335 4.9665 10.75 4 10.75C3.0335 10.75 2.25 11.5335 2.25 12.5C2.25 13.4665 3.0335 14.25 4 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.16602 13.805L10.055 9.401"
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

export default Coupon;
