import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneRotary({
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
          d="M10.9863 6.75C11.3092 6.75011 11.6109 6.90611 11.7988 7.16895L15.0645 11.7393C15.1853 11.9092 15.25 12.1125 15.25 12.3203V14.25C15.25 14.802 14.802 15.25 14.25 15.25H3.75C3.198 15.25 2.75 14.802 2.75 14.25V12.3203C2.75 12.1125 2.81472 11.9082 2.93555 11.7393L6.20117 7.16895C6.38911 6.90612 6.69184 6.75012 7.01465 6.75H10.9863ZM9 9.25C8.034 9.25 7.25 10.034 7.25 11C7.25 11.966 8.034 12.75 9 12.75C9.966 12.75 10.75 11.966 10.75 11C10.75 10.034 9.966 9.25 9 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.799 7.16901L15.064 11.739C15.185 11.909 15.25 12.112 15.25 12.32V14.25C15.25 14.802 14.802 15.25 14.25 15.25H3.75C3.198 15.25 2.75 14.802 2.75 14.25V12.32C2.75 12.112 2.815 11.908 2.936 11.739L6.20099 7.16901C6.38899 6.90601 6.69201 6.75 7.01501 6.75H10.986C11.309 6.75 11.611 6.90601 11.799 7.16901Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.75C9.966 12.75 10.75 11.966 10.75 11C10.75 10.034 9.966 9.25 9 9.25C8.034 9.25 7.25 10.034 7.25 11C7.25 11.966 8.034 12.75 9 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.25C15.802 8.25 16.25 7.802 16.25 7.25V6.28799C16.25 5.60299 15.906 4.96701 15.327 4.60001C14.083 3.81301 11.888 2.75 9 2.75C6.112 2.75 3.917 3.81301 2.673 4.60001C2.094 4.96601 1.75 5.60199 1.75 6.28799V7.25C1.75 7.802 2.198 8.25 2.75 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.5V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 5.5V6.75"
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

export default PhoneRotary;
