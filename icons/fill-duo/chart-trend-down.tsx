import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartTrendDown({
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
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V12.75C3.5 13.4408 4.05921 14 4.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H4.75C3.23079 15.5 2 14.2692 2 12.75V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.86567 10.4263L3.5 8.06067V5.93935L6.7495 9.18885L9.86567 6.07268C10.3536 5.58478 11.1454 5.58478 11.6333 6.07268L14.5 8.93935V7.25C14.5 6.83579 14.8358 6.5 15.25 6.5C15.6642 6.5 16 6.83579 16 7.25V10.75C16 11.1642 15.6642 11.5 15.25 11.5H11.75C11.3358 11.5 11 11.1642 11 10.75C11 10.3358 11.3358 10 11.75 10H13.4393L10.7495 7.31017L7.63333 10.4263C7.14544 10.9142 6.35356 10.9142 5.86567 10.4263Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartTrendDown;
