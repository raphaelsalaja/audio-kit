import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones({
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
          d="M5.47257 14.75H4.08558C3.14458 14.75 2.33058 14.094 2.13058 13.174L1.79557 11.629C1.60257 10.739 2.03558 9.83 2.84858 9.42L4.11788 8.7791"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.8821 8.7791L15.1514 9.42C15.9644 9.83 16.3974 10.739 16.2044 11.629L15.8694 13.174C15.6694 14.094 14.8554 14.75 13.9144 14.75H12.5274"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5274 14.75L13.8671 8.8451C14.5756 5.7225 12.2019 2.75 8.99998 2.75C5.79798 2.75 3.42439 5.7225 4.13289 8.8451L5.47258 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Headphones;
