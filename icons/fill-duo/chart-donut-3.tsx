import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut3({
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
          d="M3.89816 2.83751C2.12774 4.30508 1 6.52084 1 9C1 11.4792 2.12777 13.695 3.89827 15.1624L7.47605 11.5846C6.59259 11.0626 6 10.1004 6 9C6 7.89955 6.59258 6.93744 7.47604 6.41539L3.89816 2.83751Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.4701 6.4189C7.91806 6.1528 8.44119 5.99999 9 5.99999C9.82814 5.99999 10.576 6.33429 11.1204 6.8771C11.4136 7.16943 11.8882 7.16889 12.1808 6.87589L14.6538 4.39889C14.9464 4.10577 14.946 3.63092 14.6529 3.33826C13.2061 1.89363 11.2065 0.998993 8.99981 0.998993C7.06082 0.999477 5.28291 1.68963 3.89816 2.8375L7.47604 6.41537C7.47405 6.41654 7.47208 6.41772 7.4701 6.4189Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M3.89828 15.1624C5.28305 16.3101 7.06098 17 9.00002 17C13.4182 17 17 13.4182 17 9C17 8.58579 16.6642 8.25 16.25 8.25H12.75C12.3358 8.25 12 8.58579 12 9C12 10.6568 10.6568 12 9.00002 12C8.44368 12 7.9227 11.8485 7.47606 11.5846L3.89828 15.1624Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartDonut3;
