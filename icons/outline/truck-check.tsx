import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckCheck({
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
          d="M4 0C1.7939 0 0 1.7944 0 4C0 6.2056 1.7939 8 4 8C6.2061 8 8 6.2056 8 4C8 1.7944 6.2061 0 4 0ZM6.3076 3.252L4.0576 5.75201C3.9199 5.90481 3.7256 5.9942 3.5195 5.9996C3.5127 6.0001 3.5068 6.00009 3.5 6.00009C3.3018 6.00009 3.1104 5.9215 2.9697 5.7804L1.7197 4.5304C1.4267 4.2374 1.4267 3.76279 1.7197 3.46989C2.0127 3.17699 2.4873 3.17689 2.7802 3.46989L3.4716 4.1608L5.19231 2.2482C5.47061 1.9416 5.94331 1.9162 6.25191 2.1925C6.55951 2.4698 6.5849 2.9439 6.3076 3.252Z"
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

export default TruckCheck;
