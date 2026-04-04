import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2({
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
          d="M10.5 16.25H7.5V9L3.106 5.3C2.88 5.11 2.75 4.83 2.75 4.535V2.75H15.25V4.535C15.25 4.83 15.12 5.11 14.894 5.3L10.5 9V16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 16.25H7.5V9L3.106 5.3C2.88 5.11 2.75 4.83 2.75 4.535V2.75H15.25V4.535C15.25 4.83 15.12 5.11 14.894 5.3L10.5 9V16.25Z"
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

export default Filter2;
