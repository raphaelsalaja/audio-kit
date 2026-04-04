import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stadium({
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
          d="M16.2358 5.705C15.9998 7.40442 12.8505 8.75 9 8.75C5.14954 8.75 2.00015 7.40442 1.76419 5.705L1.76398 5.705L2.74998 13C2.95898 14.547 5.54798 15.75 8.99998 15.75C12.452 15.75 15.041 14.547 15.25 13L16.236 5.705H16.2358ZM7.75 15.695V12.75C7.75 12.474 7.974 12.25 8.25 12.25H9.75C10.026 12.25 10.25 12.474 10.25 12.75V15.695H7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.75 15.695V12.75C7.75 12.474 7.974 12.25 8.25 12.25H9.75C10.026 12.25 10.25 12.474 10.25 12.75V15.695"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75C13.0041 8.75 16.25 7.29493 16.25 5.5C16.25 3.70507 13.0041 2.25 9 2.25C4.99594 2.25 1.75 3.70507 1.75 5.5C1.75 7.29493 4.99594 8.75 9 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.85101 5.5C5.67701 5.129 7.12201 4.75 9.00001 4.75C10.878 4.75 12.323 5.129 13.149 5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.28 11.754C3.635 11.27 2.494 10.475 2.284 9.557"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.72 11.754C14.365 11.27 15.506 10.475 15.716 9.557"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.236 5.705L15.25 13C15.041 14.547 12.452 15.75 8.99998 15.75C5.54798 15.75 2.95898 14.547 2.74998 13L1.76398 5.705"
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

export default Stadium;
