import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLock({
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
          d="M16.25 3.75H12.25C11.6977 3.75 11.25 4.198 11.25 4.75V6.25C11.25 6.802 11.6977 7.25 12.25 7.25H16.25C16.8023 7.25 17.25 6.802 17.25 6.25V4.75C17.25 4.198 16.8023 3.75 16.25 3.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 3.25C9.1882 3.25 9.2555 3.4783 9.2102 3.5977C9.0743 3.9559 9 4.3442 9 4.75V6.25C9 8.045 10.4551 9.5 12.25 9.5H13.25V13.75C13.25 14.855 12.3546 15.75 11.25 15.75H2.75C1.6454 15.75 0.75 14.855 0.75 13.75V5.25C0.75 4.145 1.6454 3.25 2.75 3.25H9Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 8.5V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 6.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.75H12.25C11.698 3.75 11.25 4.198 11.25 4.75V6.25C11.25 6.802 11.698 7.25 12.25 7.25H16.25C16.802 7.25 17.25 6.802 17.25 6.25V4.75C17.25 4.198 16.802 3.75 16.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.5538 3.25H2.75C1.645 3.25 0.75 4.145 0.75 5.25V13.75C0.75 14.855 1.645 15.75 2.75 15.75H11.25C12.355 15.75 13.25 14.855 13.25 13.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.75V2.25C12.75 1.422 13.422 0.75 14.25 0.75C15.078 0.75 15.75 1.422 15.75 2.25V3.75"
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

export default SquareChartLock;
