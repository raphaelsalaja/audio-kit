import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart({
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
          d="M9.25 2.75H8.75C8.19772 2.75 7.75 3.19772 7.75 3.75V14.25C7.75 14.8023 8.19772 15.25 8.75 15.25H9.25C9.80228 15.25 10.25 14.8023 10.25 14.25V3.75C10.25 3.19772 9.80228 2.75 9.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 7.75H3.25C2.69772 7.75 2.25 8.19772 2.25 8.75V14.25C2.25 14.8023 2.69772 15.25 3.25 15.25H3.75C4.30228 15.25 4.75 14.8023 4.75 14.25V8.75C4.75 8.19772 4.30228 7.75 3.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 11.75H14.25C13.6977 11.75 13.25 12.1977 13.25 12.75V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 2.75H8.75C8.19772 2.75 7.75 3.19772 7.75 3.75V14.25C7.75 14.8023 8.19772 15.25 8.75 15.25H9.25C9.80228 15.25 10.25 14.8023 10.25 14.25V3.75C10.25 3.19772 9.80228 2.75 9.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 7.75H3.25C2.69772 7.75 2.25 8.19772 2.25 8.75V14.25C2.25 14.8023 2.69772 15.25 3.25 15.25H3.75C4.30228 15.25 4.75 14.8023 4.75 14.25V8.75C4.75 8.19772 4.30228 7.75 3.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75H14.25C13.6977 11.75 13.25 12.1977 13.25 12.75V14.25C13.25 14.8023 13.6977 15.25 14.25 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75Z"
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

export default Chart;
