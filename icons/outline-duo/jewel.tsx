import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Jewel({
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
          d="M6.545 12.75L5.25 11.455V6.545L6.545 5.25H11.455L12.75 6.545V11.455L11.455 12.75H6.545Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.24998 6.54499L2.26898 4.92499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.54499 5.24701L4.92499 2.26901"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.455 5.25001L13.075 2.26901"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.753 6.54499L15.731 4.92499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 11.455L15.731 13.075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.455 12.753L13.075 15.731"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.54499 12.75L4.92499 15.731"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.24698 11.455L2.26898 13.075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.545 12.75L5.25 11.455V6.545L6.545 5.25H11.455L12.75 6.545V11.455L11.455 12.75H6.545Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.412 15.457L2.543 13.588C2.355 13.4 2.25 13.146 2.25 12.881V5.119C2.25 4.854 2.355 4.599 2.543 4.412L4.412 2.543C4.6 2.355 4.854 2.25 5.119 2.25H12.881C13.146 2.25 13.401 2.355 13.588 2.543L15.457 4.412C15.645 4.6 15.75 4.854 15.75 5.119V12.881C15.75 13.146 15.645 13.401 15.457 13.588L13.588 15.457C13.4 15.645 13.146 15.75 12.881 15.75H5.119C4.854 15.75 4.599 15.645 4.412 15.457Z"
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

export default Jewel;
