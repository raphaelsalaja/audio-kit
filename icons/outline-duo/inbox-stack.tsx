import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InboxStack({
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
          d="M11.75 8.75V9.75C11.75 10.302 11.302 10.75 10.75 10.75H7.25C6.698 10.75 6.25 10.302 6.25 9.75V8.75H1.787C1.763 8.875 1.75 9.001 1.75 9.129V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V9.129C16.25 9.002 16.237 8.875 16.213 8.75H11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 2.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 8.75V9.75C11.75 10.302 11.302 10.75 10.75 10.75H7.25C6.698 10.75 6.25 10.302 6.25 9.75V8.75H1.787C1.763 8.875 1.75 9.001 1.75 9.129V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V9.129C16.25 9.002 16.237 8.875 16.213 8.75H11.75Z"
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

export default InboxStack;
