import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChartLine({
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
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.7803 6.71967C14.0732 7.01256 14.0732 7.48744 13.7803 7.78033L11.1343 10.4263C10.6464 10.9142 9.85456 10.9142 9.36667 10.4263L7.7505 8.81016L5.28134 11.2793C4.98845 11.5722 4.51357 11.5722 4.22068 11.2793C3.92778 10.9864 3.92778 10.5116 4.22068 10.2187L6.86667 7.57267C7.35456 7.08478 8.14643 7.08478 8.63433 7.57267L10.2505 9.18884L12.7197 6.71967C13.0126 6.42678 13.4874 6.42678 13.7803 6.71967Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChartLine;
