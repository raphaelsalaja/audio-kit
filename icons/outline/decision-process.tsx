import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DecisionProcess({
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
          d="M4.75 5.75V12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 4H12.25C12.802 4 13.25 4.448 13.25 5V6.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 14H12.25C12.802 14 13.25 13.552 13.25 13V11.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.25H2.75C2.198 2.25 1.75 2.698 1.75 3.25V4.75C1.75 5.302 2.198 5.75 2.75 5.75H6.75C7.302 5.75 7.75 5.302 7.75 4.75V3.25C7.75 2.698 7.302 2.25 6.75 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 12.25H2.75C2.198 12.25 1.75 12.698 1.75 13.25V14.75C1.75 15.302 2.198 15.75 2.75 15.75H6.75C7.302 15.75 7.75 15.302 7.75 14.75V13.25C7.75 12.698 7.302 12.25 6.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5274 6.68491L16.376 8.584C16.6729 8.7819 16.6729 9.21811 16.376 9.41611L13.5274 11.3152C13.3595 11.4272 13.1406 11.4272 12.9727 11.3152L10.1241 9.41611C9.8272 9.21821 9.8272 8.782 10.1241 8.584L12.9727 6.68491C13.1406 6.57291 13.3595 6.57291 13.5274 6.68491Z"
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

export default DecisionProcess;
