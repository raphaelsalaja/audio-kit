import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key3({
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
          d="M8.75 16.25C10.5449 16.25 12 14.7949 12 13C12 11.2051 10.5449 9.75 8.75 9.75C6.95507 9.75 5.5 11.2051 5.5 13C5.5 14.7949 6.95507 16.25 8.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 9.752V1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 2.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 5.75H11.578"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.25C10.5449 16.25 12 14.7949 12 13C12 11.2051 10.5449 9.75 8.75 9.75C6.95507 9.75 5.5 11.2051 5.5 13C5.5 14.7949 6.95507 16.25 8.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 14.5C9.30228 14.5 9.75 14.0523 9.75 13.5C9.75 12.9477 9.30228 12.5 8.75 12.5C8.19772 12.5 7.75 12.9477 7.75 13.5C7.75 14.0523 8.19772 14.5 8.75 14.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Key3;
