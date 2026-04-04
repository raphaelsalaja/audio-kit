import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarAxisX({
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
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 3.75C7 2.78334 7.78393 2 8.75 2H9.25C10.2161 2 11 2.78334 11 3.75V11.25C11 12.2167 10.2161 13 9.25 13H8.75C7.78393 13 7 12.2167 7 11.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 6.75C1.5 5.78334 2.28393 5 3.25 5H3.75C4.71607 5 5.5 5.78334 5.5 6.75V11.25C5.5 12.2167 4.71607 13 3.75 13H3.25C2.28393 13 1.5 12.2167 1.5 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.5 9.75C12.5 8.78334 13.2839 8 14.25 8H14.75C15.7161 8 16.5 8.78334 16.5 9.75V11.25C16.5 12.2167 15.7161 13 14.75 13H14.25C13.2839 13 12.5 12.2167 12.5 11.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartBarAxisX;
