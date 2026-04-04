import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxPin({
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
          d="M4.75 5.25H13.25C14.3546 5.25 15.25 6.14543 15.25 7.25C15.25 7.37485 15.3304 8.56507 15.1448 8.54117C14.9337 8.51401 14.7185 8.5 14.5 8.5C11.7384 8.5 9.5 10.7384 9.5 13.5C9.5 14.0536 9.59005 14.5667 9.73804 15.0365C9.82182 15.3025 5.30001 15.25 4.75 15.25C3.64543 15.25 2.75 14.3546 2.75 13.25V7.25C2.75 6.14543 3.64543 5.25 4.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.5 17.25C14.5 17.25 11.75 15.741 11.75 13.5C11.75 11.981 12.981 10.75 14.5 10.75C16.019 10.75 17.25 11.981 17.25 13.5C17.25 15.741 14.5 17.25 14.5 17.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
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
          d="M14.5 14.25C14.9142 14.25 15.25 13.9142 15.25 13.5C15.25 13.0858 14.9142 12.75 14.5 12.75C14.0858 12.75 13.75 13.0858 13.75 13.5C13.75 13.9142 14.0858 14.25 14.5 14.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 17.25C14.5 17.25 11.75 15.741 11.75 13.5C11.75 11.981 12.981 10.75 14.5 10.75C16.019 10.75 17.25 11.981 17.25 13.5C17.25 15.741 14.5 17.25 14.5 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.8047V7.25C15.25 6.146 14.355 5.25 13.25 5.25H4.75C3.645 5.25 2.75 6.146 2.75 7.25V13.25C2.75 14.354 3.645 15.25 4.75 15.25H9.02811"
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

export default BoxPin;
