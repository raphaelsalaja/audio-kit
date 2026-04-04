import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSad2({
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
          d="M9.5 13C10.0523 13 10.5 12.552 10.5 12C10.5 11.448 10.0523 11 9.5 11C8.9477 11 8.5 11.448 8.5 12C8.5 12.552 8.9477 13 9.5 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.985 8C6.859 8.119 6.431 8.496 5.757 8.559C5.121 8.619 4.652 8.364 4.499 8.273"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.015 8C10.141 8.119 10.569 8.496 11.243 8.559C11.879 8.619 12.348 8.364 12.501 8.273"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 0.75H17.25L13.75 4.75H17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.1705 2.2739C10.3432 1.9426 9.4458 1.75 8.5 1.75C4.496 1.75 1.25 4.9961 1.25 9C1.25 13.0039 4.496 16.25 8.5 16.25C12.504 16.25 15.75 13.0039 15.75 9C15.75 8.5718 15.6971 8.1575 15.6232 7.75"
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

export default FaceSad2;
