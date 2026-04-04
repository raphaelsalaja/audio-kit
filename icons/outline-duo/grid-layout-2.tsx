import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout2({
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
          d="M8.75 11.25V14.25C8.75 14.8023 9.19772 15.25 9.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.25C15.25 10.6977 14.8023 10.25 14.25 10.25H9.75C9.19772 10.25 8.75 10.6977 8.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 6.75V3.75C9.25 3.19772 8.80228 2.75 8.25 2.75L3.75 2.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H8.25C8.80228 7.75 9.25 7.30228 9.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 11.25L2.75 14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H5.25C5.80228 15.25 6.25 14.8023 6.25 14.25V11.25C6.25 10.6977 5.80228 10.25 5.25 10.25H3.75C3.19772 10.25 2.75 10.6977 2.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 11.25V14.25C8.75 14.8023 9.19772 15.25 9.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.25C15.25 10.6977 14.8023 10.25 14.25 10.25H9.75C9.19772 10.25 8.75 10.6977 8.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.75V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75H12.75C12.1977 2.75 11.75 3.19772 11.75 3.75V6.75C11.75 7.30228 12.1977 7.75 12.75 7.75H14.25C14.8023 7.75 15.25 7.30228 15.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 6.75V3.75C9.25 3.19772 8.80228 2.75 8.25 2.75L3.75 2.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H8.25C8.80228 7.75 9.25 7.30228 9.25 6.75Z"
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

export default GridLayout2;
