import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConstructionSign({
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
          d="M3.93933 3H6.06065L14.0607 11H11.9393L3.93933 3Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M8.06061 11H11.9393L3.93929 3H2.74998C2.02321 3 1.39952 3.44333 1.13513 4.07452L8.06061 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 2.75C5 2.33579 4.66421 2 4.25 2C3.83579 2 3.5 2.33579 3.5 2.75V3H5V2.75Z"
          fill={fill}
        />
        <path
          d="M14.5 2.75C14.5 2.33579 14.1642 2 13.75 2C13.3358 2 13 2.33579 13 2.75V3H14.5V2.75Z"
          fill={fill}
        />
        <path
          d="M3.5 14.5V11H5V14.5H6C6.41421 14.5 6.75 14.8358 6.75 15.25C6.75 15.6642 6.41421 16 6 16H2.5C2.08579 16 1.75 15.6642 1.75 15.25C1.75 14.8358 2.08579 14.5 2.5 14.5H3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 14.5V11H14.5V14.5H15.5C15.9142 14.5 16.25 14.8358 16.25 15.25C16.25 15.6642 15.9142 16 15.5 16H12C11.5858 16 11.25 15.6642 11.25 15.25C11.25 14.8358 11.5858 14.5 12 14.5H13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.8648 9.9255L9.93933 3H12.0607L17 7.93934V9.25C17 9.48945 16.9519 9.71766 16.8648 9.9255Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M1 6.06069V4.75C1 4.51055 1.0481 4.28235 1.13515 4.07452L8.06063 11H5.93931L1 6.06069Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M1 6.06068V9.24999C1 10.2167 1.78393 11 2.75 11H5.93931L1 6.06068Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.0606 3L16.9999 7.93934V4.75C16.9999 3.78334 16.216 3 15.2499 3H12.0606Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.06061 3L14.0606 11H15.25C15.9767 11 16.6004 10.5567 16.8648 9.9255L9.93932 3H6.06061Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ConstructionSign;
