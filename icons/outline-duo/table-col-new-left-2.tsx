import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewLeft2({
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
          d="M14.25 14.75V3.25C14.25 2.42157 13.5784 1.75 12.75 1.75L11.25 1.75C10.4216 1.75 9.75 2.42157 9.75 3.25V14.75C9.75 15.5784 10.4216 16.25 11.25 16.25H12.75C13.5784 16.25 14.25 15.5784 14.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 9H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.5V6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14.75V3.25C14.25 2.42157 13.5784 1.75 12.75 1.75L11.25 1.75C10.4216 1.75 9.75 2.42157 9.75 3.25V14.75C9.75 15.5784 10.4216 16.25 11.25 16.25H12.75C13.5784 16.25 14.25 15.5784 14.25 14.75Z"
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

export default TableColNewLeft2;
