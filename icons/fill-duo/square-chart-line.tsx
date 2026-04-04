import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLine({
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
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V4.75C16 3.23079 14.7692 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.2803 7.21967C13.5732 7.51256 13.5732 7.98744 13.2803 8.28033L11.1343 10.4263C10.6464 10.9142 9.85457 10.9142 9.36668 10.4263L7.75051 8.81016L5.78134 10.7793C5.48844 11.0722 5.01357 11.0722 4.72068 10.7793C4.42778 10.4864 4.42778 10.0116 4.72068 9.71867L6.86668 7.57267C7.35457 7.08478 8.14644 7.08478 8.63434 7.57267L10.2505 9.18883L12.2197 7.21967C12.5126 6.92678 12.9874 6.92678 13.2803 7.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartLine;
