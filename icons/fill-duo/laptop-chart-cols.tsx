import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartCols({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V12.75C1.5 14.2692 2.73079 15.5 4.25 15.5H13.75C15.2692 15.5 16.5 14.2692 16.5 12.75V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.75 7.25C12.1642 7.25 12.5 7.58579 12.5 8V11C12.5 11.4142 12.1642 11.75 11.75 11.75C11.3358 11.75 11 11.4142 11 11V8C11 7.58579 11.3358 7.25 11.75 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 8.75C6.66421 8.75 7 9.08579 7 9.5V11C7 11.4142 6.66421 11.75 6.25 11.75C5.83579 11.75 5.5 11.4142 5.5 11V9.5C5.5 9.08579 5.83579 8.75 6.25 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V11C9.75 11.4142 9.41421 11.75 9 11.75C8.58579 11.75 8.25 11.4142 8.25 11V6.5C8.25 6.08579 8.58579 5.75 9 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopChartCols;
