import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseSearch({
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
          d="M9 13C9 10.5186 11.0186 8.5 13.5 8.5C14.3465 8.5 15.1311 8.74443 15.8051 9.15613C15.9594 9.25033 16.25 9.15298 16.25 8.87848V6.75012C16.25 5.64512 15.355 4.75012 14.25 4.75012H3.75C2.645 4.75012 1.75 5.64512 1.75 6.75012V13.2501C1.75 14.3551 2.645 15.2501 3.75 15.2501H9C9.2784 15.2501 9.4929 15.011 9.434 14.887C9.1612 14.3129 9 13.6771 9 13Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 15.25C14.7426 15.25 15.75 14.243 15.75 13C15.75 11.757 14.7426 10.75 13.5 10.75C12.2574 10.75 11.25 11.757 11.25 13C11.25 14.243 12.2574 15.25 13.5 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.55591V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.7784"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.09 14.59L16.75 16.25"
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

export default SuitcaseSearch;
