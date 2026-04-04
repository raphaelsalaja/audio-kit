import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximize({
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
          d="M11.604 2.75H15C15.138 2.75 15.25 2.862 15.25 3V6.396C15.25 6.619 14.981 6.73 14.823 6.573L11.427 3.177C11.27 3.02 11.381 2.75 11.604 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.604 2.75H15C15.138 2.75 15.25 2.862 15.25 3V6.396C15.25 6.619 14.981 6.73 14.823 6.573L11.427 3.177C11.27 3.02 11.381 2.75 11.604 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.396 15.25H3C2.862 15.25 2.75 15.138 2.75 15V11.604C2.75 11.381 3.019 11.27 3.177 11.427L6.573 14.823C6.73 14.98 6.619 15.25 6.396 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.396 15.25H3C2.862 15.25 2.75 15.138 2.75 15V11.604C2.75 11.381 3.019 11.27 3.177 11.427L6.573 14.823C6.73 14.98 6.619 15.25 6.396 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 6.396V3C2.75 2.862 2.862 2.75 3 2.75H6.396C6.619 2.75 6.73 3.019 6.573 3.177L3.177 6.573C3.02 6.73 2.75 6.619 2.75 6.396Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 6.396V3C2.75 2.862 2.862 2.75 3 2.75H6.396C6.619 2.75 6.73 3.019 6.573 3.177L3.177 6.573C3.02 6.73 2.75 6.619 2.75 6.396Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.604V15C15.25 15.138 15.138 15.25 15 15.25H11.604C11.381 15.25 11.27 14.981 11.427 14.823L14.823 11.427C14.98 11.27 15.25 11.381 15.25 11.604Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.604V15C15.25 15.138 15.138 15.25 15 15.25H11.604C11.381 15.25 11.27 14.981 11.427 14.823L14.823 11.427C14.98 11.27 15.25 11.381 15.25 11.604Z"
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

export default CaretMaximize;
