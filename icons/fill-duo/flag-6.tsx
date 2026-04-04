import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag6({
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
          d="M3.65328 2.25626C5.58201 2.00544 7.03629 2.35156 8.13837 2.97114C9.09028 3.50601 9.63421 4.16696 10.1001 4.72317C10.5639 5.27692 10.9494 5.72573 11.626 6.08936C12.6804 6.65603 13.8996 6.71395 15.1272 6.51013C15.4347 6.45907 15.7418 6.60358 15.8984 6.8731C16.0551 7.14263 16.0287 7.48097 15.8321 7.72293C13.6637 10.3919 11.828 11.0643 10.3835 10.9993C9.6583 10.9669 9.025 10.7377 8.50428 10.5493L8.50427 10.5493C7.79851 10.2939 7.06693 10.0978 6.31017 10.2128C5.40777 10.35 4.69684 10.7992 4.21616 11.1805C3.99074 11.3594 3.68285 11.3935 3.42375 11.2683C3.16464 11.1431 3 10.8808 3 10.593V3C3 2.62318 3.2796 2.30486 3.65328 2.25626Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flag6;
