import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RankingStar({
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
          d="M11.776 1.994C11.717 1.813 11.561 1.681 11.373 1.654L10.044 1.461L9.44898 0.257C9.28098 -0.0850003 8.71998 -0.0850003 8.55298 0.257L7.95798 1.461L6.62798 1.654C6.43998 1.681 6.28298 1.813 6.22498 1.994C6.16598 2.175 6.21498 2.373 6.35198 2.506L7.31398 3.444L7.08598 4.768C7.05398 4.956 7.13098 5.145 7.28498 5.257C7.37198 5.32 7.47498 5.353 7.57898 5.353C7.65898 5.353 7.73798 5.334 7.81098 5.295L8.99998 4.67L10.188 5.295C10.356 5.384 10.56 5.369 10.714 5.257C10.868 5.145 10.945 4.955 10.913 4.768L10.685 3.444L11.647 2.506C11.784 2.373 11.833 2.174 11.774 1.994H11.776Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default RankingStar;
