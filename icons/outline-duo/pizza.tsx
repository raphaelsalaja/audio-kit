import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pizza({
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
          d="M7.5 1.93822C4.22474 2.62888 1.76625 5.53546 1.76625 9.01625C1.76625 13.0113 5.00491 16.25 9 16.25C12.9951 16.25 16.2338 13.0113 16.2338 9.01625C16.2338 8.32241 16.1361 7.65138 15.9537 7.01617L13.7469 8.29034C13.7828 8.52708 13.8014 8.76949 13.8014 9.01625C13.8014 11.668 11.6518 13.8177 9 13.8177C6.34824 13.8177 4.19856 11.668 4.19856 9.01625C4.19856 6.88832 5.58283 5.08369 7.5 4.45376V1.93822Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.75 3.2435C10.9186 3.26201 12.9091 3.75775 13.8067 5.65771L16.03 4.374C14.776 2.207 12.434 0.75 9.75 0.75V3.2435Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.25 9C7.66421 9 8 8.66421 8 8.25C8 7.83579 7.66421 7.5 7.25 7.5C6.83579 7.5 6.5 7.83579 6.5 8.25C6.5 8.66421 6.83579 9 7.25 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 11C11.1642 11 11.5 10.6642 11.5 10.25C11.5 9.83579 11.1642 9.5 10.75 9.5C10.3358 9.5 10 9.83579 10 10.25C10 10.6642 10.3358 11 10.75 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.75 11.5C8.16421 11.5 8.5 11.1642 8.5 10.75C8.5 10.3358 8.16421 10 7.75 10C7.33579 10 7 10.3358 7 10.75C7 11.1642 7.33579 11.5 7.75 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.102 7.537C16.199 8.009 16.25 8.499 16.25 9C16.25 13.004 13.004 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 5.638 4.039 2.81 7.143 1.99"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.745 8.781C13.748 8.853 13.75 8.926 13.75 9C13.75 11.623 11.623 13.75 9 13.75C6.377 13.75 4.25 11.623 4.25 9C4.25 7.048 5.427 5.371 7.111 4.64"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 3.25C11.508 3.25 13.043 4.205 13.864 5.625"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 8L16.03 4.374C14.776 2.207 12.434 0.75 9.75 0.75V8Z"
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

export default Pizza;
