import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HourglassEnd({
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
          d="M4.5 2.25C4.5 1.83579 4.83579 1.5 5.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25C13.5 4.19707 13.3625 5.67043 12.939 6.84222C12.6192 7.72668 12.1465 8.41358 11.5039 9C12.1465 9.58642 12.6192 10.2733 12.939 11.1578C13.3625 12.3296 13.5 13.8029 13.5 15.75C13.5 16.1642 13.1642 16.5 12.75 16.5H5.25C4.83579 16.5 4.5 16.1642 4.5 15.75C4.5 13.8029 4.63746 12.3296 5.06105 11.1578C5.38078 10.2733 5.85347 9.58642 6.49608 9C5.85347 8.41358 5.38078 7.72668 5.06105 6.84222C4.63746 5.67043 4.5 4.19707 4.5 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 2.25C3 1.83579 3.33579 1.5 3.75 1.5H14.25C14.6642 1.5 15 1.83579 15 2.25C15 2.66421 14.6642 3 14.25 3H3.75C3.33579 3 3 2.66421 3 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 15.75C3 15.3358 3.33579 15 3.75 15H14.25C14.6642 15 15 15.3358 15 15.75C15 16.1642 14.6642 16.5 14.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.9783 13.1412C10.8034 13.3673 10.5321 13.5 10.2461 13.5H7.75396C7.46813 13.5 7.19663 13.3673 7.02173 13.1412C6.84682 12.915 6.78531 12.62 6.85645 12.3426C7.19663 11.0248 7.83709 10.5894 8.35106 10.2402C8.52732 10.1092 8.76621 10.0348 9.00003 10.0261C9.23386 10.0349 9.47275 10.1094 9.64901 10.2402C10.1629 10.5894 10.8034 11.0249 11.1436 12.3426C11.2148 12.62 11.1532 12.915 10.9783 13.1412Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HourglassEnd;
