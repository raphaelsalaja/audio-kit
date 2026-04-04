import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MonitorVideo({
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
          d="M17.619 1.78798C17.385 1.65498 17.094 1.659 16.865 1.799L14.743 3.071C14.593 3.161 14.5 3.32399 14.5 3.49999V4.49999C14.5 4.67599 14.592 4.83898 14.743 4.92898L16.864 6.2C16.983 6.272 17.117 6.308 17.251 6.308C17.378 6.308 17.505 6.27599 17.619 6.21099C17.854 6.07799 18 5.828 18 5.558V2.441C18 2.17 17.854 1.91998 17.619 1.78798Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.75 16.25C6.508 16.011 7.628 15.75 9 15.75C9.795 15.75 10.941 15.838 12.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 1.25H10.5C9.5335 1.25 8.75 2.034 8.75 3V5C8.75 5.966 9.5335 6.75 10.5 6.75H13C13.9665 6.75 14.75 5.966 14.75 5V3C14.75 2.034 13.9665 1.25 13 1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 3.25H3.75C2.645 3.25 1.75 4.145 1.75 5.25V11.25C1.75 12.355 2.645 13.25 3.75 13.25H14.25C15.355 13.25 16.25 12.355 16.25 11.25V8.4458"
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

export default MonitorVideo;
