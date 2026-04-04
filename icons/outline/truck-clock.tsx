import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckClock({
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
          d="M10.519 14.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.2052 3.25H10.25C11.355 3.25 12.25 4.145 12.25 5.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 14.25H2.75C1.645 14.25 0.75 13.355 0.75 12.25V9.3364"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.25H14.454C14.794 6.25 15.111 6.42301 15.295 6.70901L17.091 9.50299C17.195 9.66399 17.25 9.85201 17.25 10.044V12.25C17.25 13.355 16.355 14.25 15.25 14.25H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.75H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 0C1.7939 0 0 1.7944 0 4C0 6.2056 1.7939 8 4 8C6.2061 8 8 6.2056 8 4C8 1.7944 6.2061 0 4 0ZM6.3125 4.9502C6.1934 5.2398 5.91409 5.41501 5.61909 5.41501C5.52339 5.41501 5.42769 5.3969 5.33389 5.3588L3.7148 4.69379C3.4336 4.57809 3.25 4.3042 3.25 4V2.25C3.25 1.8359 3.5859 1.5 4 1.5C4.4141 1.5 4.75 1.8359 4.75 2.25V3.4971L5.9043 3.97121C6.2871 4.12841 6.4707 4.5669 6.3125 4.9502Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.5 16.25C5.466 16.25 6.25 15.466 6.25 14.5C6.25 13.534 5.466 12.75 4.5 12.75C3.534 12.75 2.75 13.534 2.75 14.5C2.75 15.466 3.534 16.25 4.5 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25C13.216 16.25 14 15.466 14 14.5C14 13.534 13.216 12.75 12.25 12.75C11.284 12.75 10.5 13.534 10.5 14.5C10.5 15.466 11.284 16.25 12.25 16.25Z"
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

export default TruckClock;
