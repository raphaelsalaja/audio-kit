import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AirBaloon({
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
          d="M9.5 14.75H6V16.25H9.5V14.75Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0919 2.2617C9.3921 1.9394 8.6039 1.75 7.75 1.75C4.968 1.75 2.75 3.562 2.75 6.5229C2.75 9.4838 5.65 11.75 5.65 11.75H9.85C9.85 11.75 10.0834 11.5652 10.4135 11.2412"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.452 5.52C15.228 4.369 14.217 3.5 13 3.5C11.619 3.5 10.5 4.619 10.5 6C9.672 6 9 6.672 9 7.5C9 8.328 9.672 9 10.5 9H15.25C16.216 9 17 8.217 17 7.25C17 6.353 16.322 5.622 15.452 5.52Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AirBaloon;
