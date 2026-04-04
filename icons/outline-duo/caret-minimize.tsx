import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimize({
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
          d="M7.24999 3.60399V6.99999C7.24999 7.13799 7.13799 7.24999 6.99999 7.24999H3.60399C3.38099 7.24999 3.26999 6.98099 3.42699 6.82299L6.82299 3.42699C6.97999 3.26999 7.24999 3.38099 7.24999 3.60399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.396 7.24999H11C10.862 7.24999 10.75 7.13799 10.75 6.99999V3.60399C10.75 3.38099 11.019 3.26999 11.177 3.42699L14.573 6.82299C14.73 6.97999 14.619 7.24999 14.396 7.24999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 14.396V11C10.75 10.862 10.862 10.75 11 10.75H14.396C14.619 10.75 14.73 11.019 14.573 11.177L11.177 14.573C11.02 14.73 10.75 14.619 10.75 14.396Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.60399 10.75H6.99999C7.13799 10.75 7.24999 10.862 7.24999 11V14.396C7.24999 14.619 6.98099 14.73 6.82299 14.573L3.42699 11.177C3.26999 11.02 3.38099 10.75 3.60399 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.24999 3.60399V6.99999C7.24999 7.13799 7.13799 7.24999 6.99999 7.24999H3.60399C3.38099 7.24999 3.26999 6.98099 3.42699 6.82299L6.82299 3.42699C6.97999 3.26999 7.24999 3.38099 7.24999 3.60399Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.396 7.24999H11C10.862 7.24999 10.75 7.13799 10.75 6.99999V3.60399C10.75 3.38099 11.019 3.26999 11.177 3.42699L14.573 6.82299C14.73 6.97999 14.619 7.24999 14.396 7.24999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 14.396V11C10.75 10.862 10.862 10.75 11 10.75H14.396C14.619 10.75 14.73 11.019 14.573 11.177L11.177 14.573C11.02 14.73 10.75 14.619 10.75 14.396Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.60399 10.75H6.99999C7.13799 10.75 7.24999 10.862 7.24999 11V14.396C7.24999 14.619 6.98099 14.73 6.82299 14.573L3.42699 11.177C3.26999 11.02 3.38099 10.75 3.60399 10.75Z"
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

export default CaretMinimize;
