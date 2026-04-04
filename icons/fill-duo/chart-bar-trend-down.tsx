import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarTrendDown({
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
          d="M1.5 3.75C1.5 2.78334 2.28393 2 3.25 2H3.75C4.71607 2 5.5 2.78334 5.5 3.75V14.25C5.5 15.2167 4.71607 16 3.75 16H3.25C2.28393 16 1.5 15.2167 1.5 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 8.75C7 7.78334 7.78393 7 8.75 7H9.25C10.2161 7 11 7.78334 11 8.75V14.25C11 15.2167 10.2161 16 9.25 16H8.75C7.78393 16 7 15.2167 7 14.25V8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.5 12.75C12.5 11.7833 13.2839 11 14.25 11H14.75C15.7161 11 16.5 11.7833 16.5 12.75V14.25C16.5 15.2167 15.7161 16 14.75 16H14.25C13.2839 16 12.5 15.2167 12.5 14.25V12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.78033 2.21967C9.48744 1.92678 9.01256 1.92678 8.71967 2.21967C8.42678 2.51256 8.42678 2.98744 8.71967 3.28033L13.4393 8H12.75C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5H15.25C15.6642 9.5 16 9.16421 16 8.75V6.25C16 5.83579 15.6642 5.5 15.25 5.5C14.8358 5.5 14.5 5.83579 14.5 6.25V6.93934L9.78033 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartBarTrendDown;
