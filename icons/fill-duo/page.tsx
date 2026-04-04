import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Page({
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
          d="M4.75 1C3.23079 1 2 2.23079 2 3.75V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V3.75C16 2.23079 14.7692 1 13.25 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.5 6.25C9.5 5.83579 9.83579 5.5 10.25 5.5H12.25C12.6642 5.5 13 5.83579 13 6.25C13 6.66421 12.6642 7 12.25 7H10.25C9.83579 7 9.5 6.66421 9.5 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.25C5 8.83579 5.33579 8.5 5.75 8.5H12.25C12.6642 8.5 13 8.83579 13 9.25C13 9.66421 12.6642 10 12.25 10H5.75C5.33579 10 5 9.66421 5 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 12.25C5 11.8358 5.33579 11.5 5.75 11.5H12.25C12.6642 11.5 13 11.8358 13 12.25C13 12.6642 12.6642 13 12.25 13H5.75C5.33579 13 5 12.6642 5 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 4.75C5 4.33579 5.33579 4 5.75 4H7.25C7.66421 4 8 4.33579 8 4.75V6.25C8 6.66421 7.66421 7 7.25 7H5.75C5.33579 7 5 6.66421 5 6.25V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Page;
