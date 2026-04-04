import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plane({
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
          d="M7.25 3.5V11.215C7.25 11.737 7.291 12.259 7.372 12.775L7.844 15.762C7.934 16.331 8.424 16.75 9 16.75C9.576 16.75 10.066 16.331 10.156 15.762L10.628 12.775C10.709 12.259 10.75 11.738 10.75 11.215V3.5C10.75 2.534 9.966 1.75 9 1.75C8.034 1.75 7.25 2.534 7.25 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 10.358L1.25 11.25V9.676C1.25 9.268 1.498 8.9 1.877 8.748L7.25 6.594"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 10.358L16.75 11.25V9.676C16.75 9.268 16.502 8.9 16.123 8.748L10.75 6.594"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 3.5V11.215C7.25 11.737 7.291 12.259 7.372 12.775L7.844 15.762C7.934 16.331 8.424 16.75 9 16.75C9.576 16.75 10.066 16.331 10.156 15.762L10.628 12.775C10.709 12.259 10.75 11.738 10.75 11.215V3.5C10.75 2.534 9.966 1.75 9 1.75C8.034 1.75 7.25 2.534 7.25 3.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.844 15.762L7.487 13.502L4.585 14.834C4.228 14.998 4 15.354 4 15.746V16.502C4 16.798 4.256 17.028 4.55 16.998L8.445 16.591C8.137 16.421 7.902 16.13 7.844 15.762Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.156 15.762L10.513 13.502L13.415 14.834C13.772 14.998 14 15.354 14 15.746V16.502C14 16.798 13.744 17.028 13.45 16.998L9.55499 16.591C9.86299 16.421 10.098 16.13 10.156 15.762Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Plane;
