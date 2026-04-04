import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartPie({
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
          d="M0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 5.5C7.20479 5.5 5.75 6.95479 5.75 8.75C5.75 10.5452 7.20479 12 9 12C10.7952 12 12.25 10.5452 12.25 8.75C12.25 6.95479 10.7952 5.5 9 5.5ZM7.25 8.75C7.25 7.78321 8.03321 7 9 7V8.75H10.75C10.75 9.71679 9.96679 10.5 9 10.5C8.03321 10.5 7.25 9.71679 7.25 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopChartPie;
