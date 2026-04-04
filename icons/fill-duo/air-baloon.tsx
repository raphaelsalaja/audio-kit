import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AirBaloon({
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
          d="M3.70128 2.47204C4.7598 1.50636 6.19802 1 7.75 1C9.30198 1 10.7402 1.50636 11.7987 2.47204C12.8651 3.4449 13.5 4.84321 13.5 6.5229C13.5 8.24307 12.6631 9.71108 11.8931 10.7059C11.5022 11.2108 11.1126 11.6147 10.8201 11.893C10.6735 12.0325 10.5502 12.1416 10.4618 12.2171C10.2825 12.3702 10.0978 12.5 9.85 12.5H5.65C5.40218 12.5 5.21746 12.3702 5.03821 12.2171C4.94983 12.1416 4.82649 12.0325 4.67985 11.893C4.38741 11.6147 3.99777 11.2108 3.60691 10.7059C2.83693 9.71108 2 8.24307 2 6.5229C2 4.84321 2.63488 3.4449 3.70128 2.47204Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.25 14.75C5.25 14.3358 5.58579 14 6 14H9.5C9.91421 14 10.25 14.3358 10.25 14.75V16.25C10.25 16.6642 9.91421 17 9.5 17H6C5.58579 17 5.25 16.6642 5.25 16.25V14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.452 5.52C15.228 4.369 14.217 3.5 13 3.5C11.619 3.5 10.5 4.619 10.5 6C9.672 6 9 6.672 9 7.5C9 8.328 9.672 9 10.5 9H15.25C16.216 9 17 8.217 17 7.25C17 6.353 16.322 5.622 15.452 5.52Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AirBaloon;
