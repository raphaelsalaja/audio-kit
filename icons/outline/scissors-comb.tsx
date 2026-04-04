import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScissorsComb({
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
          d="M11.75 5.75H13.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 8.75H13.75L13.1284 14.1353C13.0599 14.7291 13.5241 15.25 14.1218 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V4.25C16.25 3.4216 15.5784 2.75 14.75 2.75H11.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 11.25C8.4216 11.25 7.75 11.9216 7.75 12.75V13.75C7.75 14.5784 8.4216 15.25 9.25 15.25C10.0784 15.25 10.75 14.5784 10.75 13.75V12.75C10.75 11.9216 10.0784 11.25 9.25 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 11.25C2.4216 11.25 1.75 11.9216 1.75 12.75V13.75C1.75 14.5784 2.4216 15.25 3.25 15.25C4.0784 15.25 4.75 14.5784 4.75 13.75V12.75C4.75 11.9216 4.0784 11.25 3.25 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 12.75L8.5 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 12.75L4 2.75"
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

export default ScissorsComb;
