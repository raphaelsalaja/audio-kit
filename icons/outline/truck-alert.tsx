import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckAlert({
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
          d="M10.519 13.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0426 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V10.3543"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75H14.454C14.794 5.75 15.111 5.92301 15.295 6.20901L17.091 9.00299C17.195 9.16399 17.25 9.35201 17.25 9.54401V11.75C17.25 12.855 16.355 13.75 15.25 13.75H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25003 7.5H7.68303C8.47113 7.5 8.94954 6.63081 8.52784 5.96491L5.59484 1.3339C5.20224 0.713998 4.29783 0.713998 3.90523 1.3339L0.972233 5.96491C0.550533 6.63071 1.02894 7.5 1.81704 7.5H2.25003"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 4V6"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 8.75C5.16421 8.75 5.5 8.41421 5.5 8C5.5 7.58579 5.16421 7.25 4.75 7.25C4.33579 7.25 4 7.58579 4 8C4 8.41421 4.33579 8.75 4.75 8.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.5 15.75C5.466 15.75 6.25 14.966 6.25 14C6.25 13.034 5.466 12.25 4.5 12.25C3.534 12.25 2.75 13.034 2.75 14C2.75 14.966 3.534 15.75 4.5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.216 15.75 14 14.966 14 14C14 13.034 13.216 12.25 12.25 12.25C11.284 12.25 10.5 13.034 10.5 14C10.5 14.966 11.284 15.75 12.25 15.75Z"
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

export default TruckAlert;
