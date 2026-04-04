import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceTongueClosedEyes({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 8.25C4.75 7.56 5.31 7 6 7C6.69 7 7.25 7.56 7.25 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 8.25C10.75 7.56 11.31 7 12 7C12.69 7 13.25 7.56 13.25 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10.75C6.769 11.518 7.83 11.993 9 11.993C10.17 11.993 11.231 11.518 12 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.756 11.986C8.754 12.148 8.773 12.312 8.827 12.474L9.077 13.224C9.286 13.853 9.872 14.25 10.5 14.25C10.657 14.25 10.817 14.225 10.975 14.172C11.761 13.91 12.185 13.061 11.923 12.275L11.673 11.525C11.63 11.394 11.574 11.286 11.501 11.177C10.799 11.689 9.934 11.992 9.001 11.992C8.901 11.992 8.757 11.985 8.757 11.985"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceTongueClosedEyes;
