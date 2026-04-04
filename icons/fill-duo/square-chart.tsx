import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChart({
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
          d="M5.75 7.25C6.16421 7.25 6.5 7.58579 6.5 8V12.25C6.5 12.6642 6.16421 13 5.75 13C5.33579 13 5 12.6642 5 12.25V8C5 7.58579 5.33579 7.25 5.75 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 9.5C12.6642 9.5 13 9.83579 13 10.25V12.25C13 12.6642 12.6642 13 12.25 13C11.8358 13 11.5 12.6642 11.5 12.25V10.25C11.5 9.83579 11.8358 9.5 12.25 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 5C9.41421 5 9.75 5.33579 9.75 5.75V12.25C9.75 12.6642 9.41421 13 9 13C8.58579 13 8.25 12.6642 8.25 12.25V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChart;
