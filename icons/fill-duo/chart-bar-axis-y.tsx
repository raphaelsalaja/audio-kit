import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarAxisY({
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
          d="M2.75 1C3.16421 1 3.5 1.33579 3.5 1.75L3.5 16.25C3.5 16.6642 3.16421 17 2.75 17C2.33579 17 2 16.6642 2 16.25L2 1.75C2 1.33579 2.33579 1 2.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.25 7C15.2167 7 16 7.78393 16 8.75L16 9.25C16 10.2161 15.2167 11 14.25 11L6.75 11C5.78334 11 5 10.2161 5 9.25L5 8.75C5 7.78393 5.78334 7 6.75 7L14.25 7Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 1.5C12.2167 1.5 13 2.28393 13 3.25L13 3.75C13 4.71607 12.2167 5.5 11.25 5.5L6.75 5.5C5.78334 5.5 5 4.71607 5 3.75L5 3.25C5 2.28393 5.78334 1.5 6.75 1.5L11.25 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 12.5C9.21666 12.5 10 13.2839 10 14.25L10 14.75C10 15.7161 9.21666 16.5 8.25 16.5L6.75 16.5C5.78334 16.5 5 15.7161 5 14.75L5 14.25C5 13.2839 5.78334 12.5 6.75 12.5L8.25 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartBarAxisY;
