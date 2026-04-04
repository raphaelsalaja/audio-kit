import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NightMode({
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
          d="M5.35419 5.25C5.35419 4.83579 5.68997 4.5 6.10419 4.5H15.2054C15.6196 4.5 15.9554 4.83579 15.9554 5.25C15.9554 5.66421 15.6196 6 15.2054 6H6.10419C5.68997 6 5.35419 5.66421 5.35419 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.54169 8.75C6.54169 8.33579 6.87747 8 7.29169 8H16.2453C16.6595 8 16.9953 8.33579 16.9953 8.75C16.9953 9.16421 16.6595 9.5 16.2453 9.5H7.29169C6.87747 9.5 6.54169 9.16421 6.54169 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17C13.4183 17 17 13.4182 17 9C17 4.58179 13.4183 1 9 1ZM9 2.5C8.32332 2.5 7.67079 2.6034 7.05736 2.79527C6.85968 3.41474 6.75 4.0699 6.75 4.75C6.75 8.33978 9.66021 11.25 13.25 11.25C13.9295 11.25 14.5847 11.1398 15.2048 10.9423C15.3966 10.3289 15.5 9.67654 15.5 9C15.5 5.41021 12.5899 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default NightMode;
