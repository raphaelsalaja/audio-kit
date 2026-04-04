import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheckPlus({
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
          d="M10.4311 16.1087C9.84109 16.2637 9.639 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 9.344 16.296 9.4808 16.25 9.8118C16.0824 9.8824 15.9513 9.8418 15.8254 9.7731C15.5058 9.5988 15.1395 9.5 14.75 9.5C13.507 9.5 12.5 10.507 12.5 11.75V12H12.25C11.007 12 10 13.007 10 14.25C10 14.7855 10.1867 15.2771 10.4987 15.6633C10.6027 15.792 10.5176 15.9883 10.4311 16.1087Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 9.25L8 11.75L12.25 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2422 9.1543C16.2434 9.1025 16.25 9.0522 16.25 9C16.25 4.9961 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C9.3271 16.25 9.64611 16.2202 9.96091 16.1772"
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

export default CircleCheckPlus;
