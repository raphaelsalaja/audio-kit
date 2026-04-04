import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckRefresh({
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
          d="M1.18966 8.13617C1.99053 8.68135 2.95802 9 4 9C5.43315 9 6.72844 8.39358 7.63655 7.43109C8.25599 6.77456 8.40363 5.84357 8.09165 5.05641C8.6429 4.64632 9 3.98986 9 3.25V2.75H10.25C11.3546 2.75 12.25 3.64543 12.25 4.75V9.25H17.25V11.75C17.25 12.8546 16.3546 13.75 15.25 13.75H13.9823C13.861 12.9019 13.1316 12.25 12.25 12.25C11.3684 12.25 10.639 12.9019 10.5177 13.75H6.23228C6.11097 12.9019 5.38162 12.25 4.5 12.25C3.61838 12.25 2.88903 12.9019 2.76772 13.75H2.75C1.64543 13.75 0.75 12.8546 0.75 11.75C0.75 11.4639 0.788127 7.86283 1.18966 8.13617Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.519 13.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75H14.454C14.794 5.75 15.111 5.923 15.295 6.209L17.091 9.003C17.195 9.164 17.25 9.352 17.25 9.544V11.75C17.25 12.855 16.355 13.75 15.25 13.75H14"
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
          d="M4.25 3.25H6.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 5.887C5.499 6.418 4.788 6.75 4 6.75C2.481 6.75 1.25 5.519 1.25 4C1.25 2.481 2.481 1.25 4 1.25C5.166 1.25 6.162 1.976 6.563 3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.768 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V8.74042"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 15.75C5.4665 15.75 6.25 14.9665 6.25 14C6.25 13.0335 5.4665 12.25 4.5 12.25C3.5335 12.25 2.75 13.0335 2.75 14C2.75 14.9665 3.5335 15.75 4.5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.2165 15.75 14 14.9665 14 14C14 13.0335 13.2165 12.25 12.25 12.25C11.2835 12.25 10.5 13.0335 10.5 14C10.5 14.9665 11.2835 15.75 12.25 15.75Z"
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

export default TruckRefresh;
