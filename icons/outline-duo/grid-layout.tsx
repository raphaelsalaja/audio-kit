import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout({
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
          d="M6.75 8.75H3.75C3.19772 8.75 2.75 9.19772 2.75 9.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V9.75C7.75 9.19772 7.30228 8.75 6.75 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 9.25H14.25C14.8023 9.25 15.25 8.80228 15.25 8.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L11.25 2.75C10.6977 2.75 10.25 3.19772 10.25 3.75V8.25C10.25 8.80228 10.6977 9.25 11.25 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V5.25C2.75 5.80228 3.19772 6.25 3.75 6.25H6.75C7.30228 6.25 7.75 5.80228 7.75 5.25V3.75C7.75 3.19772 7.30228 2.75 6.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 8.75H3.75C3.19772 8.75 2.75 9.19772 2.75 9.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V9.75C7.75 9.19772 7.30228 8.75 6.75 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V12.75C15.25 12.1977 14.8023 11.75 14.25 11.75H11.25C10.6977 11.75 10.25 12.1977 10.25 12.75V14.25C10.25 14.8023 10.6977 15.25 11.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9.25H14.25C14.8023 9.25 15.25 8.80228 15.25 8.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L11.25 2.75C10.6977 2.75 10.25 3.19772 10.25 3.75V8.25C10.25 8.80228 10.6977 9.25 11.25 9.25Z"
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

export default GridLayout;
