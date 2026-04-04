import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stack({
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
          d="M15.75 4.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 2.25H3.75C3.198 2.25 2.75 2.7 2.75 3.25V14.75C2.75 15.3 3.198 15.75 3.75 15.75H11.75C12.302 15.75 12.75 15.3 12.75 14.75V3.25C12.75 2.7 12.302 2.25 11.75 2.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 2.25H3.75C3.198 2.25 2.75 2.7 2.75 3.25V14.75C2.75 15.3 3.198 15.75 3.75 15.75H11.75C12.302 15.75 12.75 15.3 12.75 14.75V3.25C12.75 2.7 12.302 2.25 11.75 2.25Z"
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

export default Stack;
