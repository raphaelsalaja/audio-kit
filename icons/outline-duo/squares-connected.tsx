import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquaresConnected({
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
          d="M5.75 2.25H3.25C2.69772 2.25 2.25 2.69772 2.25 3.25V5.75C2.25 6.30228 2.69772 6.75 3.25 6.75H5.75C6.30228 6.75 6.75 6.30228 6.75 5.75V3.25C6.75 2.69772 6.30228 2.25 5.75 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 11.25H12.25C11.6977 11.25 11.25 11.6977 11.25 12.25V14.75C11.25 15.3023 11.6977 15.75 12.25 15.75H14.75C15.3023 15.75 15.75 15.3023 15.75 14.75V12.25C15.75 11.6977 15.3023 11.25 14.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.25H3.25C2.69772 2.25 2.25 2.69772 2.25 3.25V5.75C2.25 6.30228 2.69772 6.75 3.25 6.75H5.75C6.30228 6.75 6.75 6.30228 6.75 5.75V3.25C6.75 2.69772 6.30228 2.25 5.75 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.25H12.25C11.6977 11.25 11.25 11.6977 11.25 12.25V14.75C11.25 15.3023 11.6977 15.75 12.25 15.75H14.75C15.3023 15.75 15.75 15.3023 15.75 14.75V12.25C15.75 11.6977 15.3023 11.25 14.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 4.25H11.75C12.855 4.25 13.75 5.145 13.75 6.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 13.75H6.25C5.145 13.75 4.25 12.855 4.25 11.75V9.75"
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

export default SquaresConnected;
