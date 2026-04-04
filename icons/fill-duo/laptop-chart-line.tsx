import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartLine({
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
          d="M13.2803 6.96967C13.5732 7.26256 13.5732 7.73744 13.2803 8.03033L11.1343 10.1763C10.6464 10.6642 9.85453 10.6642 9.36664 10.1763L7.75047 8.56016L5.78131 10.5293C5.48841 10.8222 5.01354 10.8222 4.72065 10.5293C4.42775 10.2364 4.42775 9.76155 4.72065 9.46866L6.86664 7.32267C7.35453 6.83478 8.1464 6.83478 8.6343 7.32267L10.2505 8.93884L12.2196 6.96967C12.5125 6.67678 12.9874 6.67678 13.2803 6.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopChartLine;
