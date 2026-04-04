import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewTop2({
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
          d="M3.25 14.25L14.75 14.25C15.5784 14.25 16.25 13.5784 16.25 12.75V11.25C16.25 10.4216 15.5784 9.75 14.75 9.75L3.25 9.75C2.42157 9.75 1.75 10.4216 1.75 11.25V12.75C1.75 13.5784 2.42157 14.25 3.25 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 4.25H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 14.25L14.75 14.25C15.5784 14.25 16.25 13.5784 16.25 12.75V11.25C16.25 10.4216 15.5784 9.75 14.75 9.75L3.25 9.75C2.42157 9.75 1.75 10.4216 1.75 11.25V12.75C1.75 13.5784 2.42157 14.25 3.25 14.25Z"
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

export default TableRowNewTop2;
