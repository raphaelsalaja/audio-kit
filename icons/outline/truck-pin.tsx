import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckPin({
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
          d="M9.20081 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.768 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V8.98999"
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
          d="M3.5 4.25C3.9142 4.25 4.25 3.914 4.25 3.5C4.25 3.086 3.9142 2.75 3.5 2.75C3.0858 2.75 2.75 3.086 2.75 3.5C2.75 3.914 3.0858 4.25 3.5 4.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.5 7.25C3.5 7.25 0.75 5.741 0.75 3.5C0.75 1.981 1.981 0.75 3.5 0.75C5.019 0.75 6.25 1.981 6.25 3.5C6.25 5.741 3.5 7.25 3.5 7.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 15.75C5.4665 15.75 6.25 14.966 6.25 14C6.25 13.034 5.4665 12.25 4.5 12.25C3.5335 12.25 2.75 13.034 2.75 14C2.75 14.966 3.5335 15.75 4.5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.2165 15.75 14 14.966 14 14C14 13.034 13.2165 12.25 12.25 12.25C11.2835 12.25 10.5 13.034 10.5 14C10.5 14.966 11.2835 15.75 12.25 15.75Z"
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

export default TruckPin;
