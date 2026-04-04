import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRight({
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
          d="M9.552 14.391L16.133 9.39803C16.397 9.19803 16.397 8.80103 16.133 8.60103L9.552 3.60903C9.223 3.35903 8.75 3.59403 8.75 4.00703V6.75003H2.75C2.198 6.75003 1.75 7.19803 1.75 7.75003V10.25C1.75 10.802 2.198 11.25 2.75 11.25H8.75V13.993C8.75 14.406 9.223 14.641 9.552 14.391Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.552 14.391L16.133 9.39803C16.397 9.19803 16.397 8.80103 16.133 8.60103L9.552 3.60903C9.223 3.35903 8.75 3.59403 8.75 4.00703V6.75003H2.75C2.198 6.75003 1.75 7.19803 1.75 7.75003V10.25C1.75 10.802 2.198 11.25 2.75 11.25H8.75V13.993C8.75 14.406 9.223 14.641 9.552 14.391Z"
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

export default ArrowBoldRight;
