import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GoalFlag({
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
          d="M6.75 7.25L9.75 4.5L6.75 1.75H13.25C13.802 1.75 14.25 2.198 14.25 2.75V6.25C14.25 6.802 13.802 7.25 13.25 7.25H6.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 6.25V11.25H9.75C9.198 11.25 8.75 11.698 8.75 12.25V14.25H4.25C3.698 14.25 3.25 14.698 3.25 15.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 7.25L9.25 4.5L6.25 1.75H13.25C13.802 1.75 14.25 2.198 14.25 2.75V6.25C14.25 6.802 13.802 7.25 13.25 7.25H6.25Z"
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

export default GoalFlag;
