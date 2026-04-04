import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IdBadge({
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
          d="M5 4H7.75V5.25H10.25V4H14.25C15.355 4 16.25 4.895 16.25 6V12.25C16.25 13.355 15.355 14.25 14.25 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V6C1.75 4.895 2.645 4 3.75 4H5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 4.25H14.25C15.355 4.25 16.25 5.145 16.25 6.25V12.75C16.25 13.855 15.355 14.75 14.25 14.75H3.75C2.645 14.75 1.75 13.855 1.75 12.75V6.25C1.75 5.145 2.645 4.25 3.75 4.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 2.5V5.25H7.25V2.5C7.25 1.5335 8.0335 0.75 9 0.75C9.9665 0.75 10.75 1.5335 10.75 2.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 8.25H4.75V11.25H7.75V8.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 8.25H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 11.25H13.25"
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

export default IdBadge;
