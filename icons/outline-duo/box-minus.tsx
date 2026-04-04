import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxMinus({
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
          d="M4.75 5.25H13.25C14.3546 5.25 15.25 6.14543 15.25 7.25V12.5H12.25C11.0074 12.5 10 13.5074 10 14.75C10 14.8791 10.0109 15.0056 10.0318 15.1288C10.0535 15.257 5.22126 15.25 4.75 15.25C3.64543 15.25 2.75 14.3546 2.75 13.25V7.25C2.75 6.14543 3.64543 5.25 4.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 2.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 6.284L4.449 3.362C4.787 2.681 5.481 2.25 6.241 2.25H11.759C12.519 2.25 13.213 2.681 13.551 3.362L15 6.285"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.75V7.25C15.25 6.146 14.355 5.25 13.25 5.25H4.75C3.645 5.25 2.75 6.146 2.75 7.25V13.25C2.75 14.354 3.645 15.25 4.75 15.25H9.3004"
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

export default BoxMinus;
