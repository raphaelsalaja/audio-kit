import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Humidity2({
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
          d="M13.625 16.25C15.075 16.25 16.25 14.972 16.25 13.396C16.25 11.228 14.779 10.301 13.625 8.75C12.471 10.302 11 11.229 11 13.396C11 14.972 12.175 16.25 13.625 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.625 16.25C15.075 16.25 16.25 14.972 16.25 13.396C16.25 11.228 14.779 10.301 13.625 8.75C12.471 10.302 11 11.229 11 13.396C11 14.972 12.175 16.25 13.625 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 5.75C3.521 5.75 4 4.25 5.5 4.25C7 4.25 7.521 5.75 9 5.75C10.542 5.75 11.042 4.25 12.5 4.25C13.958 4.25 14.521 5.75 16 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 9.75C3.521 9.75 4 8.25 5.5 8.25C7 8.25 7.521 9.75 9 9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 13.75C3.521 13.75 4 12.25 5.5 12.25C6.6072 12.25 7.1809 13.0675 8.0008 13.4959"
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

export default Humidity2;
