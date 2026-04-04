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
          d="M1.13998 8.69884C1.97331 9.20715 2.95245 9.5 3.99999 9.5C7.03756 9.5 9.49999 7.03757 9.49999 4C9.49999 3.79174 9.48841 3.58618 9.46587 3.38394C9.4315 3.07552 10.0588 3 10.25 3C11.3546 3 12.25 3.89543 12.25 5V9.5H17.25L17.25 12.3405C17.25 13.4451 16.3546 14.3405 15.25 14.3405H13.9823C13.861 13.4924 13.1316 12.8405 12.25 12.8405C11.3684 12.8405 10.639 13.4924 10.5177 14.3405H6.23228C6.11097 13.4924 5.38162 12.8405 4.5 12.8405C3.61838 12.8405 2.88903 13.4924 2.76772 14.3405H2.75C1.64543 14.3405 0.75 13.4451 0.75 12.3405C0.75 12.1263 0.822306 8.50507 1.13998 8.69884Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.519 14.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.25H14.454C14.794 6.25 15.111 6.423 15.295 6.709L17.091 9.503C17.195 9.664 17.25 9.852 17.25 10.044V12.25C17.25 13.355 16.355 14.25 15.25 14.25H14"
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
          d="M10.2052 3.25H10.25C11.355 3.25 12.25 4.145 12.25 5.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 14.25H2.75C1.645 14.25 0.75 13.355 0.75 12.25V9.33643"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 0C1.7939 0 0 1.7944 0 4C0 6.2056 1.7939 8 4 8C6.2061 8 8 6.2056 8 4C8 1.7944 6.2061 0 4 0ZM6.3125 4.9502C6.1934 5.2398 5.91409 5.41501 5.61909 5.41501C5.52339 5.41501 5.42769 5.3969 5.33389 5.3588L3.7148 4.69379C3.4336 4.57809 3.25 4.3042 3.25 4V2.25C3.25 1.8359 3.5859 1.5 4 1.5C4.4141 1.5 4.75 1.8359 4.75 2.25V3.4971L5.9043 3.97121C6.2871 4.12841 6.4707 4.5669 6.3125 4.9502Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.5 16.25C5.4665 16.25 6.25 15.4665 6.25 14.5C6.25 13.5335 5.4665 12.75 4.5 12.75C3.5335 12.75 2.75 13.5335 2.75 14.5C2.75 15.4665 3.5335 16.25 4.5 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25C13.2165 16.25 14 15.4665 14 14.5C14 13.5335 13.2165 12.75 12.25 12.75C11.2835 12.75 10.5 13.5335 10.5 14.5C10.5 15.4665 11.2835 16.25 12.25 16.25Z"
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
