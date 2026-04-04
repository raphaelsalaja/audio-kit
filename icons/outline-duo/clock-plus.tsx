import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockPlus({
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
          d="M9 13.75C9 12.5093 10.0093 11.5 11.25 11.5H11.5V11.25C11.5 10.0093 12.5093 9 13.75 9C14.5241 9 15.2032 9.39432 15.6051 9.99204C16.3777 9.99204 16.25 9.47282 16.25 9C16.25 4.9958 13.0041 1.75 9 1.75C4.9959 1.75 1.75 4.9958 1.75 9C1.75 13.0042 4.996 16.25 9 16.25C9.4582 16.25 9.98103 16.25 9.98103 15.5976C9.38945 15.1949 9 14.5193 9 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 11.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75V9L5.75 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2206 9.5833C16.2361 9.3902 16.25 9.1968 16.25 9C16.25 4.9958 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9958 1.75 9C1.75 13.0042 4.996 16.25 9 16.25C9.197 16.25 9.3903 16.2361 9.5831 16.2207"
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

export default ClockPlus;
