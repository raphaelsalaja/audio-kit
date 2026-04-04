import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPlay({
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
          d="M5.245 2.878L14.737 8.134C15.422 8.513 15.422 9.487 14.737 9.866L5.245 15.122C4.576 15.493 3.75 15.014 3.75 14.256V3.744C3.75 2.986 4.575 2.507 5.245 2.878Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.245 2.878L14.737 8.134C15.422 8.513 15.422 9.487 14.737 9.866L5.245 15.122C4.576 15.493 3.75 15.014 3.75 14.256V3.744C3.75 2.986 4.575 2.507 5.245 2.878Z"
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

export default MediaPlay;
