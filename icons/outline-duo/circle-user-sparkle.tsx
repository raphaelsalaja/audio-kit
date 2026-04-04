import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserSparkle({
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
          d="M5.15796 15.1494C5.63587 13.4779 7.17505 12.2545 9 12.2545C10.8249 12.2545 12.3641 13.4779 12.842 15.1494C14.8888 13.8679 16.25 11.5929 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 11.5929 3.11118 13.8679 5.15796 15.1494Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.15399 15.147C5.63299 13.474 7.17299 12.25 8.99999 12.25C10.827 12.25 12.367 13.474 12.846 15.147"
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
          d="M11.59 7.16001L10.075 6.65401L9.57001 5.13901C9.40601 4.64901 8.59501 4.64901 8.43101 5.13901L7.92601 6.65401L6.41101 7.16001C6.16601 7.24101 6.00101 7.47102 6.00101 7.72902C6.00101 7.98702 6.16601 8.21702 6.41101 8.29802L7.92601 8.80401L8.43101 10.319C8.51301 10.564 8.74301 10.729 9.00101 10.729C9.25901 10.729 9.48801 10.564 9.57101 10.319L10.076 8.80401L11.591 8.29802C11.836 8.21702 12.001 7.98702 12.001 7.72902C12.001 7.47102 11.835 7.24201 11.59 7.16001Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleUserSparkle;
