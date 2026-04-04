import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUserSparkle({
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
          d="M4.75 2.75H13.25C14.3546 2.75 15.25 3.64543 15.25 4.75V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H12.8694C12.4254 13.5273 10.8614 12.2545 9 12.2545C7.13864 12.2545 5.57455 13.5273 5.13062 15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.12601 15.25C5.57001 13.525 7.13601 12.25 9.00001 12.25C10.864 12.25 12.43 13.525 12.874 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
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

export default SquareUserSparkle;
