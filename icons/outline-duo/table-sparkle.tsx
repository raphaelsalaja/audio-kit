import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableSparkle({
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
          d="M2.75 4.75C2.75 3.65 3.6454 2.75 4.75 2.75H13.25C14.3546 2.75 15.25 3.65 15.25 4.75V6.75H2.75V4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.75H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.4873 12.54L14.5928 11.91L13.9615 10.01C13.8594 9.71001 13.5728 9.5 13.2501 9.5C12.9274 9.5 12.6407 9.71001 12.5387 10.01L11.9074 11.91L10.0129 12.54C9.70674 12.64 9.50024 12.93 9.50024 13.25C9.50024 13.57 9.70674 13.86 10.0129 13.96L11.9074 14.59L12.5387 16.49C12.6408 16.79 12.9274 17 13.2501 17C13.5728 17 13.8595 16.79 13.9615 16.49L14.5928 14.59L16.4873 13.96C16.7935 13.86 17 13.57 17 13.25C17 12.93 16.7935 12.64 16.4873 12.54Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 8.01575V4.75C15.25 3.65 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.65 2.75 4.75V13.25C2.75 14.35 3.645 15.25 4.75 15.25H8.0132"
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

export default TableSparkle;
