import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal2({
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
          d="M14.382 8.42902C14.005 8.27302 13.578 8.361 13.293 8.646L8.64599 13.293C8.35999 13.58 8.27499 14.008 8.42999 14.382C8.58599 14.757 8.949 14.999 9.354 14.999H14C14.552 14.999 15 14.55 15 13.999V9.35303C15 8.94703 14.758 8.58402 14.382 8.42902Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.57001 3.617C9.41401 3.242 9.051 3 8.646 3H4C3.448 3 3 3.449 3 4V8.646C3 9.052 3.24201 9.41501 3.61801 9.57001C3.74201 9.62101 3.87301 9.646 4.00101 9.646C4.26201 9.646 4.516 9.54403 4.707 9.35303L9.354 4.70599C9.64 4.41899 9.72501 3.991 9.57001 3.617Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMaximizeDiagonal2;
