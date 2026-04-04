import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenChartCols({
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
          d="M3.75 2C2.23079 2 1 3.23079 1 4.75V11.25C1 12.7692 2.23079 14 3.75 14H14.25C15.7692 14 17 12.7692 17 11.25V4.75C17 3.23079 15.7692 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.7094 14H7.29054L6.46147 16.4872C6.33049 16.8801 5.90575 17.0925 5.51279 16.9615C5.11983 16.8305 4.90746 16.4058 5.03845 16.0128L5.7094 14Z"
          fill={fill}
        />
        <path
          d="M10.7094 14H12.2905L12.9614 16.0128C13.0924 16.4058 12.8801 16.8305 12.4871 16.9615C12.0941 17.0925 11.6694 16.8801 11.5384 16.4872L10.7094 14Z"
          fill={fill}
        />
        <path
          d="M9.75 1.375C9.75 0.960786 9.41421 0.625 9 0.625C8.58579 0.625 8.25 0.960786 8.25 1.375V2H9.75V1.375Z"
          fill={fill}
        />
        <path
          d="M11.75 6.5C12.1642 6.5 12.5 6.83579 12.5 7.25V10.25C12.5 10.6642 12.1642 11 11.75 11C11.3358 11 11 10.6642 11 10.25V7.25C11 6.83579 11.3358 6.5 11.75 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 8C6.66421 8 7 8.33579 7 8.75V10.25C7 10.6642 6.66421 11 6.25 11C5.83579 11 5.5 10.6642 5.5 10.25V8.75C5.5 8.33579 5.83579 8 6.25 8Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 5C9.41421 5 9.75 5.33579 9.75 5.75V10.25C9.75 10.6642 9.41421 11 9 11C8.58579 11 8.25 10.6642 8.25 10.25V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenChartCols;
