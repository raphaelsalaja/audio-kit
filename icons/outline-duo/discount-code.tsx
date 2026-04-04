import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiscountCode({
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
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 11.25L11.25 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
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

export default DiscountCode;
