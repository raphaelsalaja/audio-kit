import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ranking({
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
          d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 7.75H10.25C10.802 7.75 11.25 8.198 11.25 8.75V15.25H6.75V8.75C6.75 8.198 7.198 7.75 7.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 11.75H6.75V15.25H3.25C2.698 15.25 2.25 14.802 2.25 14.25V12.75C2.25 12.198 2.698 11.75 3.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.25H14.75C15.302 10.25 15.75 10.698 15.75 11.25V14.25C15.75 14.802 15.302 15.25 14.75 15.25H11.25V10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 4.75V0.75C9.25 0.75 8.792 1.556 7.819 1.742"
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

export default Ranking;
