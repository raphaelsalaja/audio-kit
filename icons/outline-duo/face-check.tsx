import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceCheck({
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
          d="M10.4025 1.88611C9.8125 1.73071 9.639 1.75061 9 1.75061C4.996 1.75061 1.75 4.99651 1.75 9.00061C1.75 13.0047 4.996 16.2506 9 16.2506C13.004 16.2506 16.25 13.0047 16.25 9.00061C16.25 8.09761 16.225 7.63911 15.923 6.84181C15.923 6.84181 15.5605 6.72501 15.5093 6.78021C15.1313 7.18791 14.6132 7.44341 14.054 7.49211C13.419 7.54741 12.791 7.33091 12.325 6.89641L10.716 5.39641C9.8336 4.57391 9.7607 3.20821 10.5319 2.29751C10.5552 2.27001 10.5792 2.24301 10.604 2.21641C10.682 2.13341 10.5647 1.93781 10.4025 1.88611Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 11.7586C10.778 12.5046 9.946 13.0006 9 13.0006C8.054 13.0006 7.222 12.5046 6.75 11.7586"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10.0006C6.552 10.0006 7 9.55291 7 9.00061C7 8.44831 6.552 8.00061 6 8.00061C5.448 8.00061 5 8.44831 5 9.00061C5 9.55291 5.448 10.0006 6 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10.0006C12.552 10.0006 13 9.55291 13 9.00061C13 8.44831 12.552 8.00061 12 8.00061C11.448 8.00061 11 8.44831 11 9.00061C11 9.55291 11.448 10.0006 12 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 3.75061L13.859 5.25061L17.256 0.75061"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.965 1.82411C9.6488 1.78061 9.3285 1.75061 9 1.75061C4.996 1.75061 1.75 4.99671 1.75 9.00061C1.75 13.0045 4.996 16.2506 9 16.2506C13.004 16.2506 16.25 13.0045 16.25 9.00061C16.25 8.41301 16.1566 7.85091 16.0234 7.30431"
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

export default FaceCheck;
