import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCandlestick({
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
          d="M3.25 9.5C3.66421 9.5 4 9.83579 4 10.25V13.25C4 13.6642 3.66421 14 3.25 14C2.83579 14 2.5 13.6642 2.5 13.25V10.25C2.5 9.83579 2.83579 9.5 3.25 9.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.25 1C3.66421 1 4 1.33579 4 1.75V5.75C4 6.16421 3.66421 6.5 3.25 6.5C2.83579 6.5 2.5 6.16421 2.5 5.75V1.75C2.5 1.33579 2.83579 1 3.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 11.5C9.41421 11.5 9.75 11.8358 9.75 12.25V16.5C9.75 16.9142 9.41421 17.25 9 17.25C8.58579 17.25 8.25 16.9142 8.25 16.5V12.25C8.25 11.8358 8.58579 11.5 9 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.75 10.5C15.1642 10.5 15.5 10.8358 15.5 11.25V14.25C15.5 14.6642 15.1642 15 14.75 15C14.3358 15 14 14.6642 14 14.25V11.25C14 10.8358 14.3358 10.5 14.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 4.5C9.41421 4.5 9.75 4.83579 9.75 5.25V7.25C9.75 7.66421 9.41421 8 9 8C8.58579 8 8.25 7.66421 8.25 7.25V5.25C8.25 4.83579 8.58579 4.5 9 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 5C1.55988 5 1 5.55959 1 6.25V9.75C1 10.4404 1.55988 11 2.25 11H4.25C4.94012 11 5.5 10.4404 5.5 9.75V6.25C5.5 5.55959 4.94012 5 4.25 5H2.25Z"
          fill={fill}
        />
        <path
          d="M8 6.5C7.30988 6.5 6.75 7.05959 6.75 7.75V11.75C6.75 12.4404 7.30988 13 8 13H10C10.6901 13 11.25 12.4404 11.25 11.75V7.75C11.25 7.05959 10.6901 6.5 10 6.5H8Z"
          fill={fill}
        />
        <path
          d="M13.75 2C13.0599 2 12.5 2.55959 12.5 3.25V10.75C12.5 11.4404 13.0599 12 13.75 12H15.75C16.4401 12 17 11.4404 17 10.75V3.25C17 2.55959 16.4401 2 15.75 2H13.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartCandlestick;
