import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GolfFlag({
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
          d="M9 8C13.561 8 17 9.72 17 12C17 12.03 16.9994 12.06 16.9982 12.0898C16.9092 14.325 13.5009 16 9 16C4.439 16 1 14.28 1 12C1 9.72 4.439 8 9 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.84277 1.12019C6.05649 0.982004 6.32569 0.961624 6.55777 1.06606L11.5578 3.31606C11.8322 3.43954 12.0062 3.71505 11.9998 4.01588C11.9935 4.31671 11.8079 4.58461 11.5285 4.69636L7 6.50778V11.25C7 11.6642 6.66421 12 6.25 12C5.83579 12 5.5 11.6642 5.5 11.25C5.5 8.08321 5.5 4.91669 5.5 1.75C5.5 1.49551 5.62906 1.25837 5.84277 1.12019Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GolfFlag;
