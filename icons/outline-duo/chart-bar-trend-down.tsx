import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarTrendDown({
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
          d="M3.25 15.25H3.75C4.30228 15.25 4.75 14.8023 4.75 14.25L4.75 3.75C4.75 3.19771 4.30228 2.75 3.75 2.75H3.25C2.69772 2.75 2.25 3.19771 2.25 3.75L2.25 14.25C2.25 14.8023 2.69772 15.25 3.25 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 15.25H9.25C9.80228 15.25 10.25 14.8023 10.25 14.25V8.75C10.25 8.19772 9.80228 7.75 9.25 7.75H8.75C8.19772 7.75 7.75 8.19772 7.75 8.75L7.75 14.25C7.75 14.8023 8.19772 15.25 8.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75H14.25C13.6977 11.75 13.25 12.1977 13.25 12.75V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 15.25H3.75C4.30228 15.25 4.75 14.8023 4.75 14.25L4.75 3.75C4.75 3.19771 4.30228 2.75 3.75 2.75H3.25C2.69772 2.75 2.25 3.19771 2.25 3.75L2.25 14.25C2.25 14.8023 2.69772 15.25 3.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 15.25H9.25C9.80228 15.25 10.25 14.8023 10.25 14.25V8.75C10.25 8.19772 9.80228 7.75 9.25 7.75H8.75C8.19772 7.75 7.75 8.19772 7.75 8.75L7.75 14.25C7.75 14.8023 8.19772 15.25 8.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75H14.25C13.6977 11.75 13.25 12.1977 13.25 12.75V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.25V8.75H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 8.5L9.25 2.75"
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

export default ChartBarTrendDown;
