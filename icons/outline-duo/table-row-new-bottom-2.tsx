import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewBottom2({
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
          d="M14.75 3.75H3.25C2.42157 3.75 1.75 4.42157 1.75 5.25V6.75C1.75 7.57843 2.42157 8.25 3.25 8.25H14.75C15.5784 8.25 16.25 7.57843 16.25 6.75V5.25C16.25 4.42157 15.5784 3.75 14.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 13.75H6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 3.75H3.25C2.42157 3.75 1.75 4.42157 1.75 5.25V6.75C1.75 7.57843 2.42157 8.25 3.25 8.25H14.75C15.5784 8.25 16.25 7.57843 16.25 6.75V5.25C16.25 4.42157 15.5784 3.75 14.75 3.75Z"
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

export default TableRowNewBottom2;
