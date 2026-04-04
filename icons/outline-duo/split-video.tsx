import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SplitVideo({
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
          d="M1.75 9.75C1.75 9.19772 2.19772 8.75 2.75 8.75H9V13.25H2.75C2.19772 13.25 1.75 12.8023 1.75 12.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 4.25L9 6.25L7.25 4.25V2.75C7.25 2.198 7.698 1.75 8.25 1.75H9.75C10.302 1.75 10.75 2.198 10.75 2.75V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.25H2.75C2.198 13.25 1.75 12.802 1.75 12.25V9.75C1.75 9.198 2.198 8.75 2.75 8.75H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 8.75H15.25C15.802 8.75 16.25 9.198 16.25 9.75V12.25C16.25 12.802 15.802 13.25 15.25 13.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 4.25L9 6.25L7.25 4.25V2.75C7.25 2.198 7.698 1.75 8.25 1.75H9.75C10.302 1.75 10.75 2.198 10.75 2.75V4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V16.25"
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

export default SplitVideo;
