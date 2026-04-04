import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCombo({
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
          d="M9 12.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 8.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.25C9.966 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 9.966 5.75 9 5.75C8.034 5.75 7.25 6.5335 7.25 7.5C7.25 8.4665 8.034 9.25 9 9.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 5.25C15.466 5.25 16.25 4.4665 16.25 3.5C16.25 2.5335 15.466 1.75 14.5 1.75C13.534 1.75 12.75 2.5335 12.75 3.5C12.75 4.4665 13.534 5.25 14.5 5.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 9.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 6.75C4.466 6.75 5.25 5.9665 5.25 5C5.25 4.0335 4.466 3.25 3.5 3.25C2.534 3.25 1.75 4.0335 1.75 5C1.75 5.9665 2.534 6.75 3.5 6.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.09311 5.7241L7.40741 6.7761"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.4135 6.4711L13.0846 4.5267"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChartCombo;
