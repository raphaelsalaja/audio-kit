import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartMinus({
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
          d="M10.128 2.5C10.0451 2.73458 10 2.98702 10 3.25C10 4.49264 11.0074 5.5 12.25 5.5H15.5V13.75C15.5 15.2692 14.2692 16.5 12.75 16.5H4.25C2.73079 16.5 1.5 15.2692 1.5 13.75V5.25C1.5 3.73079 2.73079 2.5 4.25 2.5H10.128Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.25 7.75C5.66421 7.75 6 8.08579 6 8.5V12.75C6 13.1642 5.66421 13.5 5.25 13.5C4.83579 13.5 4.5 13.1642 4.5 12.75V8.5C4.5 8.08579 4.83579 7.75 5.25 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 10C12.1642 10 12.5 10.3358 12.5 10.75V12.75C12.5 13.1642 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.1642 11 12.75V10.75C11 10.3358 11.3358 10 11.75 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 5.5C8.91421 5.5 9.25 5.83579 9.25 6.25V12.75C9.25 13.1642 8.91421 13.5 8.5 13.5C8.08579 13.5 7.75 13.1642 7.75 12.75V6.25C7.75 5.83579 8.08579 5.5 8.5 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 3.25C11.5 2.83579 11.8358 2.5 12.25 2.5H17.25C17.6642 2.5 18 2.83579 18 3.25C18 3.66421 17.6642 4 17.25 4H12.25C11.8358 4 11.5 3.66421 11.5 3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartMinus;
