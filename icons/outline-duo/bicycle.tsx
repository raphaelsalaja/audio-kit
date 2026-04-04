import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bicycle({
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
          d="M14.25 14.75C15.907 14.75 17.25 13.4069 17.25 11.75C17.25 10.0931 15.907 8.75 14.25 8.75C12.593 8.75 11.25 10.0931 11.25 11.75C11.25 13.4069 12.593 14.75 14.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 14.75C5.407 14.75 6.75 13.4069 6.75 11.75C6.75 10.0931 5.407 8.75 3.75 8.75C2.093 8.75 0.75 10.0931 0.75 11.75C0.75 13.4069 2.093 14.75 3.75 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 14.75C15.907 14.75 17.25 13.4069 17.25 11.75C17.25 10.0931 15.907 8.75 14.25 8.75C12.593 8.75 11.25 10.0931 11.25 11.75C11.25 13.4069 12.593 14.75 14.25 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 14.75C5.407 14.75 6.75 13.4069 6.75 11.75C6.75 10.0931 5.407 8.75 3.75 8.75C2.093 8.75 0.75 10.0931 0.75 11.75C0.75 13.4069 2.093 14.75 3.75 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.4534 7.08651L7.0312 6.28421C6.8583 5.95561 6.5176 5.74991 6.1463 5.74991H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.75L10.594 2.75H14.375C15.1344 2.75 15.75 3.3656 15.75 4.125C15.75 4.8844 15.1344 5.5 14.375 5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 11.75C7.3434 10.5059 10.0833 8.63481 11.97 6.13721"
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

export default Bicycle;
