import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid({
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
          d="M14.25 10.75H11.75C11.1977 10.75 10.75 11.1977 10.75 11.75V14.25C10.75 14.8023 11.1977 15.25 11.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H11.75C11.1977 2.75 10.75 3.19772 10.75 3.75V6.25C10.75 6.80228 11.1977 7.25 11.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.25C6.80228 15.25 7.25 14.8023 7.25 14.25V11.75C7.25 11.1977 6.80228 10.75 6.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H11.75C11.1977 2.75 10.75 3.19772 10.75 3.75V6.25C10.75 6.80228 11.1977 7.25 11.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.25C6.80228 15.25 7.25 14.8023 7.25 14.25V11.75C7.25 11.1977 6.80228 10.75 6.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.75H11.75C11.1977 10.75 10.75 11.1977 10.75 11.75V14.25C10.75 14.8023 11.1977 15.25 11.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75Z"
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

export default Grid;
